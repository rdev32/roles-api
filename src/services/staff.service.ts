import { PrismaClient, type Staff } from '@prisma/client'

const prisma = new PrismaClient()

export async function create (data: Staff): Promise<void> {
  await prisma.staff.create({ data })
}

export async function read (id: string): Promise<void> {
  await prisma.staff.findFirst({ where: { id } })
}

export async function update (id: string, data: Staff): Promise<void> {
  await prisma.staff.update({ where: { id }, data })
}

export async function remove (id: string): Promise<void> {
  await prisma.staff.delete({ where: { id } })
}
