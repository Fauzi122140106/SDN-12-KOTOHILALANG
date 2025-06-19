import { useQuery } from "@tanstack/react-query";
import { fetcher } from "./api/fetcher";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getNews = async (): Promise<any> => {
  return fetcher("/news");
};

export const useGetNews = () => {
  return useQuery({
    queryKey: ["useGetNews"],
    queryFn: () => getNews(),
  });
};
