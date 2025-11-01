import { Router, Request, Response } from "express";
import * as productController from "../../controllers/productController"
import upload from "../../middlewares/upload";

const productRouter : Router = Router();

/*
    @usage: Add Product
    @url: http://localhost:5500/api/products/add
    @params: title, description, imageUrl, brand, price, quantity, sold, userObj, categoryObj
    @method: POST
    @access: PUBLIC
*/
productRouter.post("/add", upload.single("img"), async (request : Request, response : Response) => {
    await productController.addProduct(request, response);
});

/*
    @usage: Get all Product
    @url: http://localhost:5500/api/products/
    @params: no-params
    @method: GET
    @access: PUBLIC
*/
productRouter.get("/", async (request : Request, response : Response) => {
    await productController.getALLProduct(request, response);
});

/*
    @usage: Get Product by ID
    @url: http://localhost:5500/api/products/:id
    @params: _id
    @method: GET
    @access: PUBLIC
*/
productRouter.get("/:id", async (request : Request, response : Response) => {
    await productController.getProductById(request, response);
});

/*
    @usage: Update Product by Id
    @url: http://localhost:5500/api/products/updateProduct/:id
    @params: _id
    @method: PUT
    @access: PUBLIC
*/
productRouter.put("/updateProduct/:id", async (request : Request, response : Response) => {
    await productController.updateProductById(request, response);
});

/*
    @usage: Delete Product By Id
    @url: http://localhost:5500/api/products/deleteProduct/:id
    @params: _id
    @method: DELETE
    @access: PUBLIC
*/
productRouter.delete("/deleteProduct/:id", async (request : Request, response : Response) => {
    await productController.deleteProductById(request, response);
});

export default productRouter;