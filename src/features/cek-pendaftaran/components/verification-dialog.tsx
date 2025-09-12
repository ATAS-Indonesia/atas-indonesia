"use client";

import { useEffect, useState } from "react";
import { ExternalLink, User, MapPin, Clock, Briefcase } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface UserProfileData {
  fullName: string;
  country: string;
  serviceHours: string;
  serviceProjects: string;
  cached?: boolean;
  cacheAge?: number;
}

interface VerificationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  linkType: "sfh" | "sdg" | "invalid";
}

export const VerificationDialog = ({
  isOpen,
  onClose,
  url,
  linkType,
}: VerificationDialogProps) => {
  const [userData, setUserData] = useState<UserProfileData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUserProfile = async () => {
    if (!url || linkType !== "sdg") return;

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const response = await fetch(
        `/api/scrape-user-profile?url=${encodeURIComponent(url)}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch user profile");
      }

      const data = await response.json();
      setUserData(data);
    } catch (err) {
      console.error("Error fetching user profile:", err);
      setError(
        err instanceof Error ? err.message : "Failed to fetch user profile"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && linkType === "sdg" && !userData && !loading) {
      fetchUserProfile();
    }
  }, [isOpen, linkType, userData, loading]);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setUserData(null);
      setError(null);
      setLoading(false);
      onClose();
    }
  };

  const getDialogTitle = () => {
    if (linkType === "sfh") return "Sertifikat Safe From Harm";
    if (linkType === "sdg") return "Profil SDGs Hub WOSM";
    return "Tautan Verifikasi Tidak Valid";
  };

  const getDialogDescription = () => {
    if (linkType === "sfh")
      return "Lihat sertifikat Safe From Harm untuk calon anggota.";
    if (linkType === "sdg")
      return "Lihat informasi profil SDGs Hub WOSM untuk calon anggota.";
    return "Tautan ini tampaknya bukan tautan verifikasi yang valid.";
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {linkType === "sfh" ? (
              <Briefcase className="h-5 w-5 text-blue-500" />
            ) : linkType === "sdg" ? (
              <User className="h-5 w-5 text-green-500" />
            ) : (
              <ExternalLink className="h-5 w-5 text-orange-500" />
            )}
            {getDialogTitle()}
          </DialogTitle>
          <DialogDescription>{getDialogDescription()}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {linkType === "sfh" ? (
            <div className="text-center py-8">
              <Briefcase className="h-16 w-16 mx-auto text-blue-500 mb-4" />
              <p className="text-muted-foreground">
                Verifikasi sertifikat Safe From Harm
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Klik tautan di bawah untuk melihat sertifikat
              </p>
            </div>
          ) : linkType === "invalid" ? (
            <div className="text-center py-8">
              <ExternalLink className="h-16 w-16 mx-auto text-orange-500 mb-4" />
              <p className="text-muted-foreground">
                Tautan ini tampaknya bukan tautan verifikasi yang valid
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Jika Anda yakin ini adalah kesalahan, Anda masih dapat membuka
                tautan untuk verifikasi manual
              </p>
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground break-all">{url}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {loading && (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
              )}

              {error && (
                <div className="text-center py-4">
                  <div className="text-destructive text-sm">{error}</div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={fetchUserProfile}
                    className="mt-2"
                  >
                    Coba Lagi
                  </Button>
                </div>
              )}

              {userData && (
                <div className="space-y-3">
                  {/* {userData.cached && (
                    <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      📦 Cached data (age: {userData.cacheAge}s)
                    </div>
                  )} */}

                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Nama Lengkap</div>
                      <div className="text-sm text-muted-foreground">
                        {userData.fullName}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Negara</div>
                      <div className="text-sm text-muted-foreground">
                        {userData.country}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">Service Hours</div>
                      <div className="text-sm text-muted-foreground">
                        {userData.serviceHours}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium">
                        Service Projects
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {userData.serviceProjects}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-end gap-2 pt-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Tutup
          </Button>
          <Button asChild>
            <a
              href={url}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              Buka{" "}
              {linkType === "sfh"
                ? "Sertifikat"
                : linkType === "sdg"
                ? "Profil"
                : "Tautan"}
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
