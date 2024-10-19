import { Router } from "express";
import { signup, login } from "./customer.controller.js";

// Initialize a new Router instance to define customer-related routes.
const customerRouter = Router()

/**
 * Route to handle customer registration (signup).
 * Calls the signup function from the controller when a POST request is made to "/signup".
 */
customerRouter.post("/signup", signup)

/**
 * Route to handle customer login.
 * Calls the login function from the controller when a POST request is made to "/login".
 */
customerRouter.post("/login", login)

export default customerRouter;
