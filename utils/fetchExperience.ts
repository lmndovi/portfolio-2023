import { client } from "@/sanity/lib/client";
import { Experience } from "@/typings";

export const fetcher = async (query: string): Promise<Experience[]> => {
  const result = await client.fetch<Experience[]>(query);
  return result;
};
