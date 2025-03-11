import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const category = await prisma.category.create({
    data: {
      name: 'soups',
      photo: 'https://example.com/category-photo.jpg',
    },
  });
  console.log(category)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e:unknown) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })