import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
//  --- Create user ---
// const user = await prisma.user.create({
  //  data: {
   //     name: "Willam",
   //     email: "williamg.@gmail.com"
   // }
//});
//console.log(user)

//  --- Get users ---
const getAll = await prisma.user.findMany();

console.log(getAll)

//const createUserPost = await prisma.user.create({
//    data:{
//        name: "Matheus",
//        email: "Williamg...@gmial.com",
//        post: {
//            create: {
//                title: "Sou antisocial",
//                content: "estou sofrendo para falar com mujer"
//            }
//        }
//    }
//})

}

main()
    .then(async () =>{
        await prisma.$disconnect()
    }).catch(async(e) => {
        console.error(e);
        await prisma.$disconnect()
        process.exit(1)
    })