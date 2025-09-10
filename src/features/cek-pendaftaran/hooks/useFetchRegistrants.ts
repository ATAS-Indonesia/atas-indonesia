import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { parseTSV } from "@/utils/data";

const GOOGLE_SHEET_LINK =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRq3NMS6GuFWyClAo70ZM7gOnz8VODxh7npIul23bK-pVoCJaB08TG-moooGJ_ETxCatDY9aPiDScgF/pub?gid=1134636585&single=true&output=tsv";

export const useFetchRegistrants = () => {
  const registrants = useQuery({
    queryKey: ["registrants"],
    queryFn: async () => {
      try {
        const response = await axios.get(GOOGLE_SHEET_LINK);

        const data = response.data;

        if (data) {
          return parseTSV(data);
        }

        return [];
      } catch (e) {
        console.error(e);
        return [];
      }
    },
    enabled: true,
  });

  return registrants;
};
