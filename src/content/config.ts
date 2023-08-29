import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      coverAlt: z.string(),
    }),
});

export const collections = {
  posts: postCollection,
};
