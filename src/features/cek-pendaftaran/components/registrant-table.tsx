"use client";

import {
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Settings2, Squirrel } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useFetchRegistrants } from "../hooks/useFetchRegistrants";
import type { RegisteredMember } from "../hooks/types";
import { VerificationDialog } from "./verification-dialog";
import { VerificationLink } from "./verification-link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const columnHelper = createColumnHelper<RegisteredMember>();

const createColumns = (
  isValidator: boolean,
  onLinkClick: (url: string, type: "sfh" | "sdg" | "invalid") => void
) => [
  columnHelper.accessor("Nama Lengkap", {
    header: "Nama",
    cell: ({ row }) => {
      return <div>{row.getValue("Nama Lengkap")}</div>;
    },
    enableHiding: false,
    enableSorting: true,
  }),
  columnHelper.accessor("Tingkatan Pramuka Garuda Terakhir", {
    header: "Tingkatan Pramuka Garuda",
    cell: ({ row }) => {
      const tingkatanMapper = {
        "Siaga Garuda": "- Cub",
        "Penggalang Garuda": "",
        "Penegak Garuda": "- Rover",
        "Pandega Garuda": "- Senior Rover",
      };
      return (
        <div>
          Pramuka {row.getValue("Tingkatan Pramuka Garuda Terakhir")} / Garuda
          Scout{" "}
          {
            tingkatanMapper[
              row.getValue(
                "Tingkatan Pramuka Garuda Terakhir"
              ) as keyof typeof tingkatanMapper
            ]
          }
        </div>
      );
    },
  }),
  columnHelper.accessor("Asal Kwartir Cabang", {
    header: () => <div className="hidden sm:block">Kwartir Cabang</div>,
    cell: ({ row }) => {
      return (
        <div className="hidden sm:block">
          {row.getValue("Asal Kwartir Cabang")}
        </div>
      );
    },
    enableHiding: true,
    enableSorting: false,
  }),
  columnHelper.accessor("Asal Kwartir Daerah", {
    header: () => <div className="hidden sm:block">Kwartir Daerah</div>,
    cell: ({ row }) => {
      return (
        <div className="hidden sm:block">
          {row.getValue("Asal Kwartir Daerah")}
        </div>
      );
    },
    enableHiding: true,
    enableSorting: false,
  }),
  ...(isValidator
    ? [
        columnHelper.accessor("Tautan Profil SDGs Hub WOSM", {
          header: "Tautan Verifikasi",
          cell: ({ row }) => {
            const sfhLink = row.original["Unggah Sertifikat Safe From Harm"];
            const sdgLink = row.original["Tautan Profil SDGs Hub WOSM"];

            return (
              <VerificationLink
                sfhLink={sfhLink}
                sdgLink={sdgLink}
                onLinkClick={onLinkClick}
                status={row.original["Status"]}
              />
            );
          },
          enableHiding: false,
          enableSorting: false,
        }),
        columnHelper.accessor(
          "Unggah Scan Surat Keputusan / Piagam / Sertifikat Pramuka Garuda Terakhir",
          {
            header: "Sertifikat Pramuka Garuda",
            cell: ({ row }) => {
              return (
                <a
                  href={
                    row.original[
                      "Unggah Scan Surat Keputusan / Piagam / Sertifikat Pramuka Garuda Terakhir"
                    ]
                  }
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Sertifikat
                </a>
              );
            },
          }
        ),
      ]
    : []),
  columnHelper.accessor("Status", {
    header: "Status",
    cell: ({ row }) => {
      const status = row.original["Status"];

      if (status.toLowerCase().includes("approved")) {
        return (
          <Badge variant={"secondary"} className="bg-green-600 text-green-100">
            Disetujui
          </Badge>
        );
      }

      const rejectKeywords = ["reject", "denied", "decline"];

      if (rejectKeywords.includes(status.toLowerCase())) {
        return <Badge variant={"destructive"}>Ditolak</Badge>;
      }

      if (status.toLowerCase().includes("empty")) {
        return (
          <Badge
            variant={"outline"}
            className="bg-atas-primary-200 text-atas-primary-950"
          >
            Service Hour Kosong
          </Badge>
        );
      }

      if (status.toLowerCase().includes("invalid link")) {
        return (
          <Badge variant={"secondary"} className="bg-red-300 text-red-800">
            Tautan Tidak Valid
          </Badge>
        );
      }

      return <div>Proses Verifikasi</div>;
    },
    enableHiding: false,
    enableSorting: true,
  }),
];

const DEFAULT_PAGE_SIZE = 20;

export const RegistrantTable = () => {
  const { data, isError, isLoading } = useFetchRegistrants();
  const searchParams = useSearchParams();
  const isValidator = searchParams?.get("viewAs") === "validator";

  // Dialog state
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogUrl, setDialogUrl] = useState("");
  const [dialogType, setDialogType] = useState<"sfh" | "sdg" | "invalid">(
    "sfh"
  );

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [statusFilter, setStatusFilter] = useState<
    "approved" | "empty" | undefined
  >(undefined);

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);

  const handleLinkClick = (url: string, type: "sfh" | "sdg" | "invalid") => {
    setDialogUrl(url);
    setDialogType(type);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setDialogUrl("");
  };

  const filteredData = useMemo(() => {
    if (!data) return [];
    if (statusFilter === undefined) return data;
    return data?.filter(item => {
      if (statusFilter === "approved") {
        return (item as RegisteredMember).Status.toLowerCase().includes(
          "approved"
        );
      }

      if (statusFilter === "empty") {
        return !(item as RegisteredMember).Status.toLowerCase().includes(
          "approved"
        );
      }
    });
  }, [data, statusFilter]);

  const columns = createColumns(isValidator, handleLinkClick);

  const table = useReactTable({
    data: (filteredData ?? []) as RegisteredMember[],
    columns,
    state: {
      columnVisibility,
      sorting,
      columnFilters,
      pagination: {
        pageSize,
        pageIndex,
      },
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const handlePageChange = (page: number) => {
    setPageIndex(page);
  };
  const totalFilteredRows = table.getFilteredRowModel().rows.length;

  return (
    <>
      <div className="flex items-center py-4">
        <Input
          placeholder="Cari berdasarkan nama..."
          value={
            (table.getColumn("Nama Lengkap")?.getFilterValue() as string) ?? ""
          }
          onChange={event =>
            table.getColumn("Nama Lengkap")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="ml-auto hidden h-8 md:flex"
            >
              <Settings2 />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[150px]">
            {/* Status Filter */}
            <DropdownMenuCheckboxItem
              key="showAll"
              className="capitalize"
              checked={statusFilter === undefined}
              onCheckedChange={checked => {
                if (checked) {
                  setStatusFilter(undefined);
                } else {
                  setStatusFilter("approved");
                }
              }}
            >
              Tampilkan semua
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              key="showApprovedOnly"
              className="capitalize"
              checked={statusFilter === "approved"}
              onCheckedChange={checked => {
                if (checked) {
                  setStatusFilter("approved");
                } else {
                  setStatusFilter(undefined);
                }
              }}
            >
              Sudah disetujui
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              key="showEmptyOnly"
              className="capitalize"
              checked={statusFilter === "empty"}
              onCheckedChange={checked => {
                if (checked) {
                  setStatusFilter("empty");
                } else {
                  setStatusFilter(undefined);
                }
              }}
            >
              Belum disetujui
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading &&
              table.getHeaderGroups().map(headerGroup => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <TableCell key={header.id}>
                      <Skeleton className="h-4 w-full" />
                    </TableCell>
                  ))}
                </TableRow>
              ))}

            {!isLoading &&
              (isError ||
                (table.getFilteredRowModel().rows.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={table.getVisibleLeafColumns().length}
                      className="min-h-24 text-center py-10"
                    >
                      <Squirrel className="size-24 mx-auto text-atas-primary-200 mb-6" />
                      <p className="text-sm text-muted-foreground">
                        Uh oh, data tidak ditemukan.
                      </p>
                    </TableCell>
                  </TableRow>
                )))}
            {table.getRowModel().rows.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Rows per page</span>
          <Select
            value={String(pageSize)}
            onValueChange={value => {
              const nextSize = Number(value);
              setPageSize(nextSize);
              table.setPageSize(nextSize);
              const newTotalPages = Math.max(
                1,
                Math.ceil(totalFilteredRows / nextSize)
              );
              if (pageIndex > newTotalPages - 1) {
                setPageIndex(newTotalPages - 1);
                table.setPageIndex(newTotalPages - 1);
              }
            }}
          >
            <SelectTrigger className="h-8 w-[90px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-3 sm:ml-auto">
          <div className="text-sm text-muted-foreground">
            Showing {pageIndex * pageSize + 1} -{" "}
            {Math.min(pageIndex * pageSize + pageSize, totalFilteredRows)} of{" "}
            {totalFilteredRows}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                handlePageChange(pageIndex - 1);
                table.previousPage();
              }}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                handlePageChange(pageIndex + 1);
                table.nextPage();
              }}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>

      <VerificationDialog
        isOpen={dialogOpen}
        onClose={handleDialogClose}
        url={dialogUrl}
        linkType={dialogType}
      />
    </>
  );
};
