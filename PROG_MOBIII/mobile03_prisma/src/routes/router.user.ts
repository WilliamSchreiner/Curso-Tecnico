import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { EnsureAuthenticateUser } from "../middlewares/EnsureAuthenticateUser";

const userRoute = Router();
const prisma = new PrismaClient();

interface IRequestBody {
  name: string;
  email: string;
  password: string;
}

// Busca por usuarios
userRoute.get("/getall", EnsureAuthenticateUser, async (req, res) => {
  const getAll = await prisma.user.findMany();

  res.json(getAll);
});

// Busca por ID
userRoute.get("/:id", EnsureAuthenticateUser, async (req, res) => {
  const { id } = req.params;

  const getById = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  res.json(getById);
});

//Busca por nome ou email
userRoute.get("/", EnsureAuthenticateUser, async (req, res) => {
  const { nome, email } = req.query;

  const getSearch = await prisma.user.findMany({
    where: {
      OR: [
        {
          email: {
            contains: String(email),
          },
        },
        {
          name: {
            contains: String(nome),
          },
        },
      ],
    },
  });

  res.json(getSearch);
});

// Registrar um usuario
userRoute.post("/", async (req, res) => {
  const { name, password, email }: IRequestBody = req.body;

  const userExist = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (userExist)
    return res.status(404).json({ error: true, message: "Usuário já existe" });

  const createUser = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  res.json(createUser);
});

// Atualizar um usuario

userRoute.put("/:id", EnsureAuthenticateUser, async (req, res) => {
  const { name, email, password }: IRequestBody = req.body;
  const { id } = req.params;

  const userExist = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  if (!userExist)
    return res.status(400).json({ error: true, message: "Usuário não existe" });

  let newInfo: IRequestBody = { name: "", email: "", password: "" };

  name === undefined || name === userExist.name
    ? (newInfo.name = userExist.name!)
    : (newInfo.name = name);
  email === undefined || email === userExist.email
    ? (newInfo.email = userExist.email!)
    : (newInfo.email = email);
  password === undefined || password === userExist.password
    ? (newInfo.password = userExist.password!)
    : (newInfo.password = password);

  const updateUser = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name: newInfo.name,
      email: newInfo.email,
      password: newInfo.password,
    },
    select: {
      name: true,
      email: true,
      password: true,
      post: true,
    },
  });

  res.json(updateUser);
});

// deletar usuario
userRoute.delete("/:id", EnsureAuthenticateUser, async (req, res) => {
  const { id } = req.params;

  const userExist = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  if (!userExist)
    return res.status(400).json({ error: true, message: "Usuário não existe" });

  const deleteUser = await prisma.user.delete({
    where: {
      id,
    },
  });

  res.json(deleteUser);
});
userRoute.get("/", async (req, res) => {
  const getAll = await prisma.user.findMany();

  res.json(getAll);
});
