import cors from 'cors';
import express from "express";
import { router } from "./router/index";

const server = express();

const port = 3333;


server.use(cors())
server.use(express.json());

server.use(router);

server.listen(port, () => {
  console.log(`Server On- <(°-°)> - end: http://localhost:${port}`);
});
