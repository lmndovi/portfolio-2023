import { client } from "@/sanity/lib/client";
import { Project } from "@/typings";

export const fetcher = async (query: string): Promise<Project[]> => {
  const result = await client.fetch<Project[]>(query);
  return result;
};

// (`*[_type == "project"]`);
