import { Router } from "express";

import { authRouter } from "../../../routes/auth.routes";
import { userRouter } from "../../../routes/users.routes";

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello world" });
});

routes.use("/auth", authRouter);
routes.use("/users", userRouter);

export { routes };
