import { useQuery } from "@tanstack/react-query";
import { fetcher } from "./api/fetcher";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getGallery = async (): Promise<any> => {
  return fetcher("/gallery");
};

export const useGetGallery = () => {
  return useQuery({
    queryKey: ["useGetGallery"],
    queryFn: () => getGallery(),
  });
};
