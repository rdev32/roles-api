import { PrismaClient, type User } from '@prisma/client'

const prisma = new PrismaClient()

export async function create (data: User): Promise<void> {
  await prisma.user.create({ data })
}

export async function read (id: string): Promise<void> {
  await prisma.user.findFirst({ where: { id } })
}

export async function update (id: string, data: User): Promise<void> {
  await prisma.user.update({ where: { id }, data })
}

export async function remove (id: string): Promise<void> {
  await prisma.user.delete({ where: { id } })
}
