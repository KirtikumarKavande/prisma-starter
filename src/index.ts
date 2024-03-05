import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  let user = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
    },
    select: {
      username: true,
    },
  });

  console.log(user);
}
insertUser("kk2@gmail.com", "123456", "kirtikumar", "kavande");
