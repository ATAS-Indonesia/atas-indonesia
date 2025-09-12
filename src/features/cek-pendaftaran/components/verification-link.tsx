import { cn } from "@/lib/utils";

// Component for verification link that opens dialog
export const VerificationLink = ({ 
  sfhLink, 
  sdgLink, 
  onLinkClick,
  status
}: {
  sfhLink: string;
  sdgLink: string;
  onLinkClick: (url: string, type: "sfh" | "sdg" | "invalid") => void;
  status?: string;
}) => {
  const link = (sfhLink || sdgLink) as string;
  const isSdgLink = sdgLink !== "";
  const sdgUrlRegex = /^https:\/\/sdgs\.scout\.org\/user\/\d+$/;
  const isSdgLinkValid = isSdgLink && sdgUrlRegex.test(sdgLink.trim());

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (sfhLink) {
      onLinkClick(sfhLink, "sfh");
    } else if (isSdgLinkValid) {
      onLinkClick(sdgLink, "sdg");
    } else if (sdgLink) {
      // Invalid SDG link - still allow opening
      onLinkClick(sdgLink, "invalid");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={
        cn("text-blue-600 hover:text-blue-800 hover:underline text-left", {
          "text-purple-600 hover:text-purple-800 hover:underline": !!sfhLink,
          "text-gray-600 italic": !!status,
        })
      }
      disabled={!sfhLink && !sdgLink}
    >
      {sfhLink && "Safe From Harm"}
      {sdgLink && isSdgLinkValid && "SDGs Hub WOSM"}
      {sdgLink && !isSdgLinkValid && (
        <span className="text-orange-600">Tautan Tidak Valid</span>
      )}
    </button>
  );
};