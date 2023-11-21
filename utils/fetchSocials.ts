import { client } from "@/sanity/lib/client";
import { Social } from "@/typings";

export const fetcher = async (query: string): Promise<Social[]> => {
  const result = await client.fetch<Social[]>(query);
  return result;
};
