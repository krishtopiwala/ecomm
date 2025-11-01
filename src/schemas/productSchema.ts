import mongoose from "mongoose";
import { IProduct } from "../models/IProduct";

const productSchema = new mongoose.Schema<IProduct>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    sold: { type: Number, required: true },
    userObj: { type: String, required: true, ref: "users" },
    categoryObj: { type: String, required: true, ref: "categories" }
}, { timestamps: true });

const productCollection = mongoose.model<IProduct>("products", productSchema);
export default productCollection;