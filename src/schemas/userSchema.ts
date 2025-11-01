import mongoose from "mongoose";
import { IUser } from "../models/IUser";

const userSchema = new mongoose.Schema<IUser>({
    username: { type: String, required: true },
    imageUrl: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    isSuperAdmin: { type: Boolean, required: true, default: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });

const userCollection = mongoose.model<IUser>("users", userSchema);
export default userCollection;