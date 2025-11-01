import { Router, Request, Response } from "express";
import * as categoryController from "../../controllers/categoryController";

const categoryRouter : Router = Router();

/*
    @usage: Add Category
    @url: http://localhost:5500/api/categories/add
    @params: name, description
    @method: POST
    @access: PUBLIC
*/
categoryRouter.post("/add", async (request : Request, response : Response) => {
    await categoryController.addCategory(request, response);
});

/*
    @usage: Get all Category
    @url: http://localhost:5500/api/categories/
    @params: no-params
    @method: GET
    @access: PUBLIC
*/
categoryRouter.get("/", async (request : Request, response : Response) => {
    await categoryController.getAllCategory(request, response);
});

/*
    @usage: Get Category By ID
    @url: http://localhost:5500/api/categories/:id
    @params: name, description
    @method: POST
    @access: PUBLIC
*/
categoryRouter.get("/:id", async (request : Request, response : Response) => {
    await categoryController.getCategoryById(request, response);
});

/*
    @usage: Update Category by ID
    @url: http://localhost:5500/api/categories/:id
    @params: id
    @method: PUT
    @access: PUBLIC
*/
categoryRouter.put("/updateCategory/:id", async (request : Request, response : Response) => {
    await categoryController.updateCategoryById(request, response);
});

/*
    @usage: Delete Category By ID
    @url: http://localhost:5500/api/categories/deleteCategory/:id
    @params: _id
    @method: DELETE
    @access: PUBLIC
*/
categoryRouter.delete("/deleteCategory/:id", async (request : Request, response : Response) => {
    await categoryController.deleteCategoryById(request, response);
});

export default categoryRouter;