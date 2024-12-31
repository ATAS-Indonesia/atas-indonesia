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
import {
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
  Settings2,
  Squirrel,
} from "lucide-react";
import { useState } from "react";
import { Member, useFetchMember } from "../hooks/useFetchMember";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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

const columnHelper = createColumnHelper<Member>();

const columns = [
  columnHelper.accessor("Nomor", {
    header: "No.",
    enableHiding: false,
    cell: ({ row }) => {
      return <div>{row.getValue("Nomor")}</div>;
    },
  }),
  columnHelper.accessor("Nomor ATAS", {
    header: "ID ATAS",
    cell: ({ row }) => {
      return <div>#{row.getValue("Nomor ATAS")}</div>;
    },
    enableHiding: false,
    enableSorting: true,
  }),
  columnHelper.accessor("Nama Lengkap", {
    header: "Nama",
    cell: ({ row }) => {
      return <div>{row.getValue("Nama Lengkap")}</div>;
    },
    enableHiding: false,
    enableSorting: true,
  }),
  columnHelper.accessor("Kwartir Cabang", {
    header: () => <div className="hidden sm:block">Kwartir Cabang</div>,
    cell: ({ row }) => {
      return (
        <div className="hidden sm:block">{row.getValue("Kwartir Cabang")}</div>
      );
    },
    enableHiding: true,
    enableSorting: false,
  }),
  columnHelper.accessor("Kwartir Daerah", {
    header: () => <div className="hidden sm:block">Kwartir Daerah</div>,
    cell: ({ row }) => {
      return (
        <div className="hidden sm:block">{row.getValue("Kwartir Daerah")}</div>
      );
    },
    enableHiding: true,
    enableSorting: false,
  }),
];

export const MemberTable = () => {
  const { data, isError, isLoading } = useFetchMember();

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const [pageSize, setPageSize] = useState(20);
  const [pageIndex, setPageIndex] = useState(0);

  const table = useReactTable({
    data: (data ?? []) as Member[],
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
              Column View
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[150px]">
            {table
              .getAllColumns()
              .filter(
                column =>
                  typeof column.accessorFn !== "undefined" &&
                  column.getCanHide()
              )
              .map(column => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={value => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
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

            {isError ||
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
              ))}
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
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Showing {pageIndex * pageSize + 1} -{" "}
          {Math.min(
            pageIndex * pageSize + pageSize,
            table.getFilteredRowModel().rows.length
          )}{" "}
          of {table.getFilteredRowModel().rows.length}
        </div>
        <div className="space-x-2">
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
    </>
  );
};
