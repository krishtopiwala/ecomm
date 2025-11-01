import { Request, Response } from "express";
import { IUser } from "../models/IUser";
import userCollection from "../schemas/userSchema";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import cloudinary from "../config/cloudinary-config";


export const registerUser = async (request : Request, response : Response) => {
    try {
        let { username, isAdmin, isSuperAdmin, email, password } = request.body;

        // Hash Password
        let salt = await bcryptjs.genSalt(10);
        let hashPassword = await bcryptjs.hash(password, salt);

        let imageUrl = "";

        if (!request.file) {
            return response.status(400).send("No file uploaded.");
        }

        if (request.file) {
            const result = await cloudinary.uploader.upload(request.file.path);
            console.log("Cloudinary: ", result);
            imageUrl = result.secure_url;
            console.log(imageUrl);
        }

        let userObj: IUser = {  
            username: username,
            imageUrl: imageUrl,
            isAdmin: isAdmin,
            isSuperAdmin: isSuperAdmin,
            email: email,
            password: hashPassword
        };

        let newUser = new userCollection(userObj).save()
        .then((user) => {
            console.log(user);
            response.status(201).json({ msg: "User registered successfully" });
        })
        .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "Failed to register user" });
        })
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Page not found" });
    }
};

export const getAllUser = async (request : Request, response : Response) => {
    try {
        await userCollection.find()
        .then((users) => {
            console.log(users);
            response.status(200).json({ "User": users });
        })
        .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "No users registered yet" });
        })
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};

export const getUserById = async (request : Request, response : Response) => {
    try {
        await userCollection.findById(request.params.id)
        .then((user) => {
            console.log(user);
            response.status(200).json({ "User": user });
        })
        .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "No such user" });
        })
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};

export const updateUserById = async (request : Request, response : Response) => {
    try {
        let { username, imageUrl, isAdmin, isSuperAdmin, email, password } = request.body;

        let salt = await bcryptjs.genSalt(10);
        let hashPassword = await bcryptjs.hash(password, salt);

        let userObj : IUser = {
            username: username,
            imageUrl: imageUrl,
            isAdmin: isAdmin,
            isSuperAdmin: isSuperAdmin,
            email: email,
            password: hashPassword
        };

        await userCollection.findOneAndUpdate({ _id: request.params.id }, userObj, { new: true })
        .then((updatedUser) => {
            console.log(updatedUser);
            response.status(200).json({ msg: "User updated successfully" });
        })
        .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "Failed to update" });
        })
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};

export const deleteUserById = async (request : Request, response : Response) => {
    try {
        await userCollection.findByIdAndDelete(request.params.id)
        .then((user) => {
            console.log(user);
            response.status(200).json({ msg: "User deleted successfully" });
        })
        .catch((error) => {
            console.log(error);
            response.status(500).json({ msg: "Failed to delete" });
        })
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};

export const loginUser = async (request : Request, response : Response) => {
    try {
        let { email, password } = request.body;

        let userObj = await userCollection.findOne({ email: email });
        if (!userObj) {
            return response.status(401).json({ msg: "Invalid email credentials" })
        }

        let isMatch : boolean = await bcryptjs.compare(password, userObj.password);
        if (!isMatch) {
            return response.status(401).json({ msg: "Invalid Password" });
        }

        let payLoad = {
            id: userObj._id,
            email: userObj.email
        };

        let secretKey : string | undefined = process.env.JWT_SECRET_KEY;

        if (payLoad && secretKey) {
            let token = jwt.sign(payLoad, secretKey, { expiresIn: "1000000" });
            console.log(token);
            return response.status(200).json({ 
                msg: "Login Success",
                token: token,
                userObj: userObj
            });
        }
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};