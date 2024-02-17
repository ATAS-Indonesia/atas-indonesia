import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { parseCSV } from "@/utils/data";

export interface Member {
  Golongan: string;
  "Kwartir Cabang": string;
  "Kwartir Daerah": string;
  NSO: string;
  "Nama Lengkap": string;
  Nomor: string;
  "Nomor ATAS": string;
}

const GOOGLE_SHEET_LINK =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR31M811KmpqtBdUVWnl6lfyM5kPIXAKtfDEJ4hQWmiUw60z1yox5ibtmGopfRPXjS0Gt38lZ-wsNHZ/pub?gid=828340925&single=true&output=csv";

const useMemberList = () => {
  const memberList = useQuery({
    queryKey: ["getMemberList"],
    queryFn: async () => {
      try {
        const response = await axios.get(GOOGLE_SHEET_LINK);

        const data = response.data;

        if (data) {
          return parseCSV(data);
        }

        return [];
      } catch (e) {
        console.error(e);
        return [];
      }
    },
    enabled: true,
    gcTime: 24 * 60 * 60 * 1000,
  });

  return memberList;
};

export default useMemberList;
