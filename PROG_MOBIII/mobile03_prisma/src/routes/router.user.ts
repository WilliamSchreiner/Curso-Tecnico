import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { sign } from "jsonwebtoken";
import { EnsureAuthenticateUser } from "../middlewares/EnsureAuthenticateUser";

const userRoute = Router();
const prisma = new PrismaClient();

interface IRequestBody {
  name: string;
  email: string;
  password: string;
}

// Busca por usuarios
userRoute.get("/getall", async (req, res) => {
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

// Autenticar um usuario
userRoute.post("/autenticate", async (req, res) => {
  const { password, email }: IRequestBody = req.body;

  const userExist = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!userExist)
    return res
      .status(404)
      .json({ error: true, message: "Email ou senha incorreta" });

  if (userExist.password !== password)
    return res
      .status(404)
      .json({ error: true, massage: "Email ou senha invalida" });
  const token = sign({ email: userExist.email }, "ChaveSecreta", {
    subject: userExist.id,
    expiresIn: "1d",
  });

  res.json(token);
});

// Registrar um usuario
userRoute.post("/register", async (req, res) => {
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

export { userRoute };
