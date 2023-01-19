import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getGuestbook(req, res) {
  const guestbookEntries = await prisma.guestbook.findMany()
  res.json(guestbookEntries)
}

export async function createGuestbookEntry(req, res) {
  const { name, message } = req.body
  const newEntry = await prisma.guestbook.create({
    data: { name, message },
  })
  res.json(newEntry)
}
