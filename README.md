# Dublet

A mini link shortener built with the Dub.co [TypeScript SDK](https://www.npmjs.com/package/dub).

```typescript
import { Dub } from "dub";

const dub = new Dub({
  token: process.env.DUB_API_KEY, // optional: defaults to the `DUB_API_KEY` environment variable
});

async function shorten() {
  const result = await dub.links.create({
    url: "https://google/com",
  });

  // Handle the result
  console.log(result);
}
```

## Demo

https://github.com/dubinc/dublet/assets/28986134/7cbc7b1e-0acd-41a3-82c9-5c8fa5c57164

## Stack

- Link Management Infrastructure: [Dub.co](https://dub.co/api)
- Framework: [Next.js](https://nextjs.org/) + Server Actions
- UI: [v0](https://v0.dev/)
