"use server";

import { Dub } from "dub";

const dub = new Dub({
  workspaceId: "ws_clrei1gld0002vs9mzn93p8ik",
});

export async function shorten(_prevState: any, formData: FormData) {
  const url = formData.get("url");
  if (!url || typeof url !== "string") {
    return {
      shortLink: "Invalid URL",
    };
  }
  const { shortLink } = await dub.links.create({
    domain: "dub.sh", // optional param – if not set the primary domain will be used
    url, // required – the URL to shorten
    tagNames: ["random tag"], // optional param – the tags to associate with the link (can also be tagIds)
    externalId: "ext_x12345678", // optional param – the unique ID of the link in your database
  });

  return {
    shortLink,
  };
}
