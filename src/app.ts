import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import bodyParser from "body-parser";
import userRouter from "./routes/userRoutes/userRoutes";
import addressRouter from "./routes/addressRoutes/addressRoutes";
import categoryRouter from "./routes/categoryRoutes/categoryRoutes";
import productRouter from "./routes/productRoutes/productRoutes";
import cors from "cors";

const app : express.Application = express();
dotenv.config({ path: "./.env" });
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT : Number = Number(process.env.PORT);
const DBURL : string = String(process.env.MONGO_URL);

connectDB(DBURL);

// Router configuration
app.use("/api/users", userRouter);
app.use("/api/address", addressRouter);
app.use("/api/category", categoryRouter);
app.use("/api/products", productRouter);

app.listen(PORT || 5501, () => {
    console.log(`Server is started at PORT: ${PORT}`);
});