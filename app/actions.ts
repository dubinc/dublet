"use server";

import { dub } from "@/lib/dub";

export async function shorten(_prevState: any, formData: FormData) {
  const url = formData.get("url");
  if (!url || typeof url !== "string") {
    return {
      shortLink: "Invalid URL",
    };
  }
  try {
    const { shortLink } = await dub.links.create({
      domain: "dub.sh", // optional param – if not set the primary domain will be used
      url, // required – the URL to shorten
      tagIds: ["tag_txxHuppW1IjzZueUtFbf8cNt"], // optional param – the tags to associate with the link
      // externalId: "ext_x12345677", // optional param – the unique ID of the link in your database
    });

    return {
      shortLink,
    };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
