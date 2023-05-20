import { Router } from "express";

import { userRoute } from "./route.user";

const router = Router();

router.use("/user", userRoute);

export { router };
