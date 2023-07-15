import express from "express";
import { router } from "./routes";
const server = express();
const port = 3333;

server.use(express.json());

// interceptador de rotas
server.use((req, res, next) => {
  console.log(
    `[${new Date().getTime()}] - ${
      req.headers["x-forwarded-for"] || req.socket.remoteAddress
    } - ${req.method} - ${req.originalUrl}`
  );
  next();
});

server.use(router);

// interceptado de rota (Erro)
server.use((req, res, next) => {
  res.status(404).json({ message: "Erro ao acessar a rota!" });
});

server.listen(port, () => {
  console.log(`Server in running - http://localhost:${port} `);
});
