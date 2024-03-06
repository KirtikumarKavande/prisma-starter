import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createTodo(userId: number, title: string, description: string) {
await prisma.todo.create({
  data:{
    userId,
    title,
    description
  }
})

}

createTodo(1, "go to gym", "go to gym and do 10 pushups");