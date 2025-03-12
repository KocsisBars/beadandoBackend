import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
  for (let i = 0; i < 100; i++) {
    const concerts = [
      {
        performer: "John Doe",
        startTime: new Date("2025-03-15T18:00:00Z"),
        duration: 90,
        cancelled: false,
      },
      {
        performer: "Jane Smith",
        startTime: new Date("2025-03-16T19:30:00Z"),
        duration: 120,
        cancelled: false,
      },
      {
        performer: "The Rock Band",
        startTime: new Date("2025-03-17T20:00:00Z"),
        duration: 150,
        cancelled: true,
      },
      {
        performer: "DJ Electro",
        startTime: new Date("2025-03-18T22:00:00Z"),
        duration: 180,
        cancelled: false,
      },
      {
        performer: "Acoustic Duo",
        startTime: new Date("2025-03-19T17:00:00Z"),
        duration: 60,
        cancelled: false,
      },
    ];

    for (const concert of concerts) {
      await prisma.concert.create({
        data: concert,
      });
    }

  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })