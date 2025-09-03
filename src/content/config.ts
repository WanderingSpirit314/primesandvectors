import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    date: z.string(),
    title: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
};
