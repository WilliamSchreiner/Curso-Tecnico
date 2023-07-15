import { Router } from "express";
import { userRoute } from "./router.user";

const router = Router();

router.use("/user", userRoute);

export { router };
