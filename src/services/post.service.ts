import { PrismaClient, type Post, type Prisma } from '@prisma/client'
import httpError from 'http-errors'
import { z } from 'zod'

const PostCreateInput = z.object({
  id: z.string().uuid().optional(),
  title: z.string().max(16),
  content: z.array(z.string()).min(2).max(32),
  pictures: z.array(z.string()).optional(),
  createdAt: z.date().or(z.string()).optional(),
  updatedAt: z.date().or(z.string()).optional(),
  userId: z.string().uuid()
}) satisfies z.Schema<Prisma.PostUncheckedCreateInput>

const prisma = new PrismaClient().$extends({
  query: {
    post: {
      async create ({ args, query }) {
        const validation = PostCreateInput.safeParse(args.data)
        if (!validation.success) {
          throw validation.error
        }
        args.data = validation.data
        const result = await query(args)
        return result
      },
      async update ({ args, query }) {
        const validation = PostCreateInput.partial().safeParse(args.data)
        if (!validation.success) {
          throw validation.error
        }
        args.data = validation.data
        const result = await query(args)
        return result
      }
    }
  }
})

export async function create (body: unknown): Promise<void> {
  await prisma.post.create({ data: body as Post })
}

export async function read (id: string): Promise<unknown> {
  const post = await prisma.post.findFirst({ where: { id } })
  if (post === null) {
    throw new httpError.NotFound('Post not found.')
  }
  return post
}

export async function readAll (): Promise<unknown> {
  return await prisma.post.findMany()
}

export async function update (id: string, data: unknown): Promise<void> {
  await prisma.post.update({ where: { id }, data: data as Post })
}

export async function remove (id: string): Promise<void> {
  await prisma.post.delete({ where: { id } })
}
