"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController = __importStar(require("../../controllers/userController"));
const tokenVerifier_1 = require("../../middlewares/tokenVerifier");
const express_validator_1 = require("express-validator");
const validateForm_1 = require("../../middlewares/validateForm");
const upload_1 = __importDefault(require("../../middlewares/upload"));
const userRouter = (0, express_1.Router)();
/*
    @usage : Register a User
    @url : http://localhost:5500/api/users/register
    @params : username, imageUrl, isAdmin, isSuperAdmin, email, password
    @method : POST
    @access : PUBLIC
*/
userRouter.post("/register", upload_1.default.single("img"), [
    (0, express_validator_1.body)("username").not().isEmpty().withMessage("Username is required"),
    (0, express_validator_1.body)("email").not().isEmpty().withMessage("Email is required"),
    (0, express_validator_1.body)("password").not().isEmpty().withMessage("Password is required")
], validateForm_1.validateForm, async (request, response) => {
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
userRouter.get("/", async (request, response) => {
    await userController.getAllUser(request, response);
});
/*
    @usage : Get a User By Id
    @url : http://localhost:5500/api/users/register/:id
    @params : _id
    @method : GET
    @access : PRIVATE
*/
userRouter.get("/:id", tokenVerifier_1.tokenVerifier, async (request, response) => {
    await userController.getUserById(request, response);
});
/*
    @usage : Update a User By Id
    @url : http://localhost:5500/api/users/register/updateUser/:id
    @params : _id
    @method : PUT
    @access : PRIVATE
*/
userRouter.put("/updateUser/:id", tokenVerifier_1.tokenVerifier, [
    (0, express_validator_1.body)("username").not().isEmpty().withMessage("Username is required"),
    (0, express_validator_1.body)("imageUrl").not().isEmpty().withMessage("Image is required"),
    (0, express_validator_1.body)("email").not().isEmpty().withMessage("Email is required"),
    (0, express_validator_1.body)("password").not().isEmpty().withMessage("Password is required")
], validateForm_1.validateForm, async (request, response) => {
    await userController.updateUserById(request, response);
});
/*
    @usage : Delete a User By Id
    @url : http://localhost:5500/api/users/register/deleteUser/:id
    @params : _id
    @method : DELETE
    @access : PRIVATE
*/
userRouter.delete("/deleteUser/:id", tokenVerifier_1.tokenVerifier, async (request, response) => {
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
    (0, express_validator_1.body)("email").not().isEmpty().withMessage("Email is required"),
    (0, express_validator_1.body)("password").not().isEmpty().withMessage("Password is required")
], validateForm_1.validateForm, async (request, response) => {
    await userController.loginUser(request, response);
});
exports.default = userRouter;
//# sourceMappingURL=userRoutes.js.map