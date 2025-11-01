import mongoose from "mongoose";
import { ICategory } from "../models/ICategory";

const categorySchema = new mongoose.Schema<ICategory>({
    name: { type: String, required: true },
    description: { type: String, required: true }
}, { timestamps: true });

const categoryCollection = mongoose.model<ICategory>("categories", categorySchema);
export default categoryCollection;