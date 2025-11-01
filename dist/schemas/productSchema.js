"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
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
const productCollection = mongoose_1.default.model("products", productSchema);
exports.default = productCollection;
//# sourceMappingURL=productSchema.js.map