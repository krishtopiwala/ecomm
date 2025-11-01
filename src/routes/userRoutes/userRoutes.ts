import { Router, Request, Response } from "express";
import * as userController from "../../controllers/userController";
import { tokenVerifier } from "../../middlewares/tokenVerifier";
import { body } from "express-validator";
import { validateForm } from "../../middlewares/validateForm";
import upload from "../../middlewares/upload";

const userRouter : Router = Router();

/*
    @usage : Register a User
    @url : http://localhost:5500/api/users/register
    @params : username, imageUrl, isAdmin, isSuperAdmin, email, password
    @method : POST
    @access : PUBLIC
*/

userRouter.post("/register", upload.single("img"), [
    body("username").not().isEmpty().withMessage("Username is required"),
    body("email").not().isEmpty().withMessage("Email is required"),
    body("password").not().isEmpty().withMessage("Password is required")
], validateForm,  async (request : Request, response : Response) => {
    await userController.registerUser(request, response);
});


// "username": "demo",
// "isAdmin": false,
// "isSuperAdmin": false,
// "email": "demo@gmail.com",
// "password": "demo"


/*
    @usage : Get All User
    @url : http://localhost:5500/api/users/
    @params : no-params
    @method : GET
    @access : PRIVATE
*/

userRouter.get("/", async (request : Request, response : Response) => {
    await userController.getAllUser(request, response);
});

/*
    @usage : Get a User By Id
    @url : http://localhost:5500/api/users/register/:id
    @params : _id
    @method : GET
    @access : PRIVATE
*/

userRouter.get("/:id", tokenVerifier, async (request : Request, response : Response) => {
    await userController.getUserById(request, response);
});

/*
    @usage : Update a User By Id
    @url : http://localhost:5500/api/users/register/updateUser/:id
    @params : _id
    @method : PUT
    @access : PRIVATE
*/

userRouter.put("/updateUser/:id", tokenVerifier, [
    body("username").not().isEmpty().withMessage("Username is required"),
    body("imageUrl").not().isEmpty().withMessage("Image is required"),
    body("email").not().isEmpty().withMessage("Email is required"),
    body("password").not().isEmpty().withMessage("Password is required")
], validateForm, async (request : Request, response : Response) => {
    await userController.updateUserById(request, response);    
});

/*
    @usage : Delete a User By Id
    @url : http://localhost:5500/api/users/register/deleteUser/:id
    @params : _id
    @method : DELETE
    @access : PRIVATE
*/

userRouter.delete("/deleteUser/:id", tokenVerifier, async (request : Request, response : Response) => {
    await userController.deleteUserById(request, response);
});

/*
    @usage: Login User
    @url: http://localhost:5500/api/users/login
    @params: email, password
    @method: POST
    @access: PUBLIC
*/
userRouter.post("/login", [
    body("email").not().isEmpty().withMessage("Email is required"),
    body("password").not().isEmpty().withMessage("Password is required")
], validateForm, async (request : Request, response : Response) => {
    await userController.loginUser(request, response);
});

export default userRouter;