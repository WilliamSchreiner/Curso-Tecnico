import express  from "express";
import {PrismaClient} from "@prisma/client";

const server =  express();
const port = 3000;
const prisma = new PrismaClient;

interface IRequest {
    name: string;
    email: string
}

server.use(express.json())

server.get('/', async (req, res) => {
    const getAll = await prisma.user.findMany();

    res.json(getAll)
})

server.post('/', async (req, res) => {
   const {name, email}: IRequest = req.body;

   const userExist = await prisma.user.findFirst({
    where:{
        email
    }
   })

   if(!userExist) return res.status(404).json({error: true, massage: "usuario ja existe."});
   
   const createUser = await prisma.user.create({
    data: {
        name,
        email
    }
   })
   res.json(createUser)
})


server.listen(port, () => {
    console.log(`Server ta online - <(+ _ +)> - http://localhost:${port}`)
})