import { Router } from "express";
import UserController from "../controllers/UserController.js";

const routeUser = new Router()

routeUser .post("/registration", UserController.registration)

export default routeUser 