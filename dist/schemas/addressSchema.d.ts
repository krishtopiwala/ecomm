import mongoose from "mongoose";
import { IAddress } from "../models/IAddress";
declare const addressCollection: mongoose.Model<IAddress, {}, {}, {}, mongoose.Document<unknown, {}, IAddress, {}, {}> & IAddress & Required<{
    _id: string;
}> & {
    __v: number;
}, any>;
export default addressCollection;
//# sourceMappingURL=addressSchema.d.ts.map