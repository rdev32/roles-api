import { PrismaClient, type Token } from '@prisma/client'

const prisma = new PrismaClient()

export async function create (data: Token): Promise<void> {
  await prisma.token.create({ data })
}

export async function read (id: string): Promise<void> {
  await prisma.token.findFirst({ where: { jti: id } })
}

export async function update (id: string, data: Token): Promise<void> {
  await prisma.token.update({ where: { jti: id }, data })
}

export async function remove (id: string): Promise<void> {
  await prisma.token.delete({ where: { jti: id } })
}
