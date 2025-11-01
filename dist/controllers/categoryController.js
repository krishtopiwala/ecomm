"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryById = exports.updateCategoryById = exports.getCategoryById = exports.getAllCategory = exports.addCategory = void 0;
const categorySchema_1 = __importDefault(require("../schemas/categorySchema"));
const addCategory = async (request, response) => {
    try {
        let newCategory = request.body;
        await new categorySchema_1.default(newCategory).save()
            .then((newCategory) => {
            console.log(newCategory);
            response.status(201).json({ msg: "Category added" });
        })
            .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "Failed to add" });
        });
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};
exports.addCategory = addCategory;
const getAllCategory = async (request, response) => {
    try {
        await categorySchema_1.default.find()
            .then((categories) => {
            console.log(categories);
            response.status(200).json({ "Category": categories });
        })
            .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "Failed to retrieve data" });
        });
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};
exports.getAllCategory = getAllCategory;
const getCategoryById = async (request, response) => {
    try {
        await categorySchema_1.default.findById(request.params.id)
            .then((category) => {
            console.log(category);
            response.status(200).json({ "Category": category });
        })
            .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "No such category" });
        });
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};
exports.getCategoryById = getCategoryById;
const updateCategoryById = async (request, response) => {
    try {
        await categorySchema_1.default.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
            .then((updatedCategory) => {
            console.log(updatedCategory);
            response.status(200).json({ msg: "Updated successfully" });
        })
            .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "Failed to update" });
        });
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};
exports.updateCategoryById = updateCategoryById;
const deleteCategoryById = async (request, response) => {
    try {
        await categorySchema_1.default.findByIdAndDelete(request.params.id)
            .then((deletedcategory) => {
            console.log(deletedcategory);
            response.status(200).json({ msg: "Deleted successfully" });
        })
            .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "Failed to delete category" });
        });
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};
exports.deleteCategoryById = deleteCategoryById;
//# sourceMappingURL=categoryController.js.map