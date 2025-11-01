"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const addressSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    flat: { type: String, required: true },
    landmark: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pinCode: { type: String, required: true },
    userObj: { type: String, required: true, ref: 'users' }
}, { timestamps: true });
const addressCollection = mongoose_1.default.model("addresses", addressSchema);
exports.default = addressCollection;
//# sourceMappingURL=addressSchema.js.map