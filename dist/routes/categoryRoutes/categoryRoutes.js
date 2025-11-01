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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController = __importStar(require("../../controllers/categoryController"));
const categoryRouter = (0, express_1.Router)();
/*
    @usage: Add Category
    @url: http://localhost:5500/api/categories/add
    @params: name, description
    @method: POST
    @access: PUBLIC
*/
categoryRouter.post("/add", async (request, response) => {
    await categoryController.addCategory(request, response);
});
/*
    @usage: Get all Category
    @url: http://localhost:5500/api/categories/
    @params: no-params
    @method: GET
    @access: PUBLIC
*/
categoryRouter.get("/", async (request, response) => {
    await categoryController.getAllCategory(request, response);
});
/*
    @usage: Get Category By ID
    @url: http://localhost:5500/api/categories/:id
    @params: name, description
    @method: POST
    @access: PUBLIC
*/
categoryRouter.get("/:id", async (request, response) => {
    await categoryController.getCategoryById(request, response);
});
/*
    @usage: Update Category by ID
    @url: http://localhost:5500/api/categories/:id
    @params: id
    @method: PUT
    @access: PUBLIC
*/
categoryRouter.put("/updateCategory/:id", async (request, response) => {
    await categoryController.updateCategoryById(request, response);
});
/*
    @usage: Delete Category By ID
    @url: http://localhost:5500/api/categories/deleteCategory/:id
    @params: _id
    @method: DELETE
    @access: PUBLIC
*/
categoryRouter.delete("/deleteCategory/:id", async (request, response) => {
    await categoryController.deleteCategoryById(request, response);
});
exports.default = categoryRouter;
//# sourceMappingURL=categoryRoutes.js.map