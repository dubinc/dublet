"use server";

import Dub from "dub";

const dub = new Dub({
  projectSlug: "acme",
});

export async function shorten(_prevState: any, formData: FormData) {
  const url = formData.get("url");
  if (!url || typeof url !== "string") {
    return {
      shortLink: "Invalid URL",
    };
  }
  const { shortLink } = await dub.links.create({
    domain: "go.acme.com", // optional param – if not set the primary domain will be used
    key: "my-key", // optional – if not set, a random 7-char key will be generated
    url, // required – the URL to shorten
    prefix: "/c/", // optional – if set, generated keys will be in the /c/:key format
    tagIds: ["clsy3dq5y000ukc4qw9wg96yj"], // optional – tags to associate with the link
  });

  return {
    shortLink,
  };
}
