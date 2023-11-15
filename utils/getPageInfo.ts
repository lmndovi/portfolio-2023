import { client } from "@/sanity/lib/client";
import { PageInfo } from "@/typings";

export const getPageInfo = async () => {
  const pageInfo = await client.fetch<PageInfo[]>(`*[_type == "pageInfo"]`);
  console.log(pageInfo);
  return {
    props: { pageInfo },
  };
};
