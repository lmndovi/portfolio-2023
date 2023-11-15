import { client } from "@/sanity/lib/client";
import { PageInfo } from "@/typings";

export const fetcher = async (query: string): Promise<PageInfo[]> => {
  const result = await client.fetch<PageInfo[]>(query);
  return result;
};

// await client.fetch<PageInfo[]>(`*[_type == "pageInfo"]`);
