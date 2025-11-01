import mongoose from "mongoose";
import { IProduct } from "../models/IProduct";
declare const productCollection: mongoose.Model<IProduct, {}, {}, {}, mongoose.Document<unknown, {}, IProduct, {}, {}> & IProduct & Required<{
    _id: string;
}> & {
    __v: number;
}, any>;
export default productCollection;
//# sourceMappingURL=productSchema.d.ts.map