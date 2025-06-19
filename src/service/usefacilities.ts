import { useQuery } from "@tanstack/react-query";
import { fetcher } from "./api/fetcher";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getFacilities = async (slug?: string): Promise<any> => {
  const endpoint = slug ? `/facilities/${slug}` : "/facilities";
  return fetcher(endpoint);
};

export const useGetFacilities = (slug?: string) => {
  return useQuery({
    queryKey: ["useGetFacilities", slug],
    queryFn: () => getFacilities(slug),
  });
};
