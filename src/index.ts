import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getTodos(userId: number) {
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {username:true, todo: true },
  });

  console.log(data);
}

getTodos(1);
