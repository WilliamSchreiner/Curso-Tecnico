import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  /**************************************** */

  //   const user = await prisma.user.create({
  //     data: {
  //       name: "João",
  //       email: "joao@fema.com.br",
  //     },
  //   });
  //   console.log(user)

  /**************************************** */

  // const getAll = await prisma.user.findMany()
  // console.log(getAll)

  /**************************************** */

  const createUserPost = await prisma.user.create({
    data: {
      name: "Pablo",
      email: "pablo@fema.com.br",
      post: {
        create: {
          title: "Post do Pablo",
          content: "Assunto do Pablo",
        },
      },
    },
  });

  console.log(createUserPost);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
