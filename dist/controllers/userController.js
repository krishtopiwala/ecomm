"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.deleteUserById = exports.updateUserById = exports.getUserById = exports.getAllUser = exports.registerUser = void 0;
const userSchema_1 = __importDefault(require("../schemas/userSchema"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cloudinary_config_1 = __importDefault(require("../config/cloudinary-config"));
const registerUser = async (request, response) => {
    try {
        let { username, isAdmin, isSuperAdmin, email, password } = request.body;
        // Hash Password
        let salt = await bcryptjs_1.default.genSalt(10);
        let hashPassword = await bcryptjs_1.default.hash(password, salt);
        let imageUrl = "";
        if (!request.file) {
            return response.status(400).send("No file uploaded.");
        }
        if (request.file) {
            const result = await cloudinary_config_1.default.uploader.upload(request.file.path);
            console.log("Cloudinary: ", result);
            imageUrl = result.secure_url;
            console.log(imageUrl);
        }
        let userObj = {
            username: username,
            imageUrl: imageUrl,
            isAdmin: isAdmin,
            isSuperAdmin: isSuperAdmin,
            email: email,
            password: hashPassword
        };
        let newUser = new userSchema_1.default(userObj).save()
            .then((user) => {
            console.log(user);
            response.status(201).json({ msg: "User registered successfully" });
        })
            .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "Failed to register user" });
        });
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Page not found" });
    }
};
exports.registerUser = registerUser;
const getAllUser = async (request, response) => {
    try {
        await userSchema_1.default.find()
            .then((users) => {
            console.log(users);
            response.status(200).json({ "User": users });
        })
            .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "No users registered yet" });
        });
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};
exports.getAllUser = getAllUser;
const getUserById = async (request, response) => {
    try {
        await userSchema_1.default.findById(request.params.id)
            .then((user) => {
            console.log(user);
            response.status(200).json({ "User": user });
        })
            .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "No such user" });
        });
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};
exports.getUserById = getUserById;
const updateUserById = async (request, response) => {
    try {
        let { username, imageUrl, isAdmin, isSuperAdmin, email, password } = request.body;
        let salt = await bcryptjs_1.default.genSalt(10);
        let hashPassword = await bcryptjs_1.default.hash(password, salt);
        let userObj = {
            username: username,
            imageUrl: imageUrl,
            isAdmin: isAdmin,
            isSuperAdmin: isSuperAdmin,
            email: email,
            password: hashPassword
        };
        await userSchema_1.default.findOneAndUpdate({ _id: request.params.id }, userObj, { new: true })
            .then((updatedUser) => {
            console.log(updatedUser);
            response.status(200).json({ msg: "User updated successfully" });
        })
            .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "Failed to update" });
        });
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};
exports.updateUserById = updateUserById;
const deleteUserById = async (request, response) => {
    try {
        await userSchema_1.default.findByIdAndDelete(request.params.id)
            .then((user) => {
            console.log(user);
            response.status(200).json({ msg: "User deleted successfully" });
        })
            .catch((error) => {
            console.log(error);
            response.status(500).json({ msg: "Failed to delete" });
        });
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};
exports.deleteUserById = deleteUserById;
const loginUser = async (request, response) => {
    try {
        let { email, password } = request.body;
        let userObj = await userSchema_1.default.findOne({ email: email });
        if (!userObj) {
            return response.status(401).json({ msg: "Invalid email credentials" });
        }
        let isMatch = await bcryptjs_1.default.compare(password, userObj.password);
        if (!isMatch) {
            return response.status(401).json({ msg: "Invalid Password" });
        }
        let payLoad = {
            id: userObj._id,
            email: userObj.email
        };
        let secretKey = process.env.JWT_SECRET_KEY;
        if (payLoad && secretKey) {
            let token = jsonwebtoken_1.default.sign(payLoad, secretKey, { expiresIn: "1000000" });
            console.log(token);
            return response.status(200).json({
                msg: "Login Success",
                token: token,
                userObj: userObj
            });
        }
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};
exports.loginUser = loginUser;
//# sourceMappingURL=userController.js.map