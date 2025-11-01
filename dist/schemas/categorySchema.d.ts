import mongoose from "mongoose";
import { ICategory } from "../models/ICategory";
declare const categoryCollection: mongoose.Model<ICategory, {}, {}, {}, mongoose.Document<unknown, {}, ICategory, {}, {}> & ICategory & Required<{
    _id: string;
}> & {
    __v: number;
}, any>;
export default categoryCollection;
//# sourceMappingURL=categorySchema.d.ts.map