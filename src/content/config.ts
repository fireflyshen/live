import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import { feedLoader } from '@ascorbic/feed-loader'
import { pageSchema, postSchema } from './schema'

const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/pages' }),
  schema: pageSchema,
})

const blog = defineCollection({
  type: 'content',
  schema: postSchema,
})
const feeds = defineCollection({
  loader: feedLoader({
    url: 'https://astro.build/rss.xml',
  }),
})

export const collections = { pages, blog, feeds }
