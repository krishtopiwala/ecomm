"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes/userRoutes"));
const addressRoutes_1 = __importDefault(require("./routes/addressRoutes/addressRoutes"));
const categoryRoutes_1 = __importDefault(require("./routes/categoryRoutes/categoryRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes/productRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
dotenv_1.default.config({ path: "./.env" });
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
const PORT = Number(process.env.PORT);
const DBURL = String(process.env.MONGO_URL);
(0, db_1.default)(DBURL);
// Router configuration
app.use("/api/users", userRoutes_1.default);
app.use("/api/address", addressRoutes_1.default);
app.use("/api/category", categoryRoutes_1.default);
app.use("/api/products", productRoutes_1.default);
app.listen(PORT || 5501, () => {
    console.log(`Server is started at PORT: ${PORT}`);
});
//# sourceMappingURL=app.js.map