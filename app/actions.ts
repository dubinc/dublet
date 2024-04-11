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
    prefix: "/c/", // optional – if set, generated keys will be in the /c/:key format
    tagIds: ["clsy3dq5y000ukc4qw9wg96yj"], // optional – tags to associate with the link
  });

  return {
    shortLink,
  };
}
