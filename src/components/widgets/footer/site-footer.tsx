import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoYoutube,
} from "react-icons/io5";
import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  TIKTOK_LINK,
  YOUTUBE_LINK,
} from "@/constants/links";

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-br from-atas-primary to-atas-secondary text-white py-10 text-center">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex items-center justify-center gap-10">
          <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer noopener">
            <IoLogoFacebook className="size-6" />
          </a>
          <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer noopener">
            <IoLogoInstagram className="size-6" />
          </a>
          <a href={TIKTOK_LINK} target="_blank" rel="noreferrer noopener">
            <IoLogoTiktok className="size-6" />
          </a>
          <a href={YOUTUBE_LINK} target="_blank" rel="noreferrer noopener">
            <IoLogoYoutube className="size-6" />
          </a>
        </div>

        <div className="">Copyright © 2024 ATAS Indonesia</div>
      </div>
    </footer>
  );
}
