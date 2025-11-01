"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController = __importStar(require("../../controllers/productController"));
const upload_1 = __importDefault(require("../../middlewares/upload"));
const productRouter = (0, express_1.Router)();
/*
    @usage: Add Product
    @url: http://localhost:5500/api/products/add
    @params: title, description, imageUrl, brand, price, quantity, sold, userObj, categoryObj
    @method: POST
    @access: PUBLIC
*/
productRouter.post("/add", upload_1.default.single("img"), async (request, response) => {
    await productController.addProduct(request, response);
});
/*
    @usage: Get all Product
    @url: http://localhost:5500/api/products/
    @params: no-params
    @method: GET
    @access: PUBLIC
*/
productRouter.get("/", async (request, response) => {
    await productController.getALLProduct(request, response);
});
/*
    @usage: Get Product by ID
    @url: http://localhost:5500/api/products/:id
    @params: _id
    @method: GET
    @access: PUBLIC
*/
productRouter.get("/:id", async (request, response) => {
    await productController.getProductById(request, response);
});
/*
    @usage: Update Product by Id
    @url: http://localhost:5500/api/products/updateProduct/:id
    @params: _id
    @method: PUT
    @access: PUBLIC
*/
productRouter.put("/updateProduct/:id", async (request, response) => {
    await productController.updateProductById(request, response);
});
/*
    @usage: Delete Product By Id
    @url: http://localhost:5500/api/products/deleteProduct/:id
    @params: _id
    @method: DELETE
    @access: PUBLIC
*/
productRouter.delete("/deleteProduct/:id", async (request, response) => {
    await productController.deleteProductById(request, response);
});
exports.default = productRouter;
//# sourceMappingURL=productRoutes.js.map