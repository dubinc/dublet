"use server";

import Dub from "dub";

const dub = new Dub({
  projectSlug: "dub",
});

export async function shorten(_prevState: any, formData: FormData) {
  const url = formData.get("url");
  if (!url || typeof url !== "string") {
    return {
      shortLink: "Invalid URL",
    };
  }
  const { shortLink } = await dub.links.create({
    url,
    prefix: "/c/", // optional – generated keys will be in the /c/:key format
  });

  return {
    shortLink,
  };
}
