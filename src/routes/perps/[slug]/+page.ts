import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export interface PreLoadType {
  title: string;
  content: string;
}

export const load: PageLoad = (({ params }): PreLoadType => {
  if (params.slug === "kwenta") {
    return {
      title: `${params.slug} suggs`,
      content: "Doesn't have 50x leverage",
    };
  }

  if (params.slug === "polynomial") {
    return {
      title: `${params.slug} amaze`,
      content: "Has 50x leverage",
    };
  }

  throw error(404, "Not found");
}) satisfies PageLoad;
