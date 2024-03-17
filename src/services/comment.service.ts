import { PrismaClient, type Comment } from '@prisma/client'

const prisma = new PrismaClient()

export async function create (data: Comment): Promise<void> {
  await prisma.comment.create({ data })
}

export async function read (id: string): Promise<void> {
  await prisma.comment.findFirst({ where: { id } })
}

export async function update (id: string, data: Comment): Promise<void> {
  await prisma.comment.update({ where: { id }, data })
}

export async function remove (id: string): Promise<void> {
  await prisma.comment.delete({ where: { id } })
}
