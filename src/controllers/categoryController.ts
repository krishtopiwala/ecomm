import { Request, Response } from "express";
import { ICategory } from "../models/ICategory";
import categoryCollection from "../schemas/categorySchema";

export const addCategory = async (request : Request, response : Response) => {
    try {
        let newCategory = request.body;
        await new categoryCollection(newCategory).save()
        .then((newCategory) => {
            console.log(newCategory);
            response.status(201).json({ msg: "Category added" });
        })
        .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "Failed to add" });
        })
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};

export const getAllCategory = async (request : Request, response : Response) => {
    try {
        await categoryCollection.find()
        .then((categories) => {
            console.log(categories);
            response.status(200).json({ "Category": categories });
        })
        .catch ((error) => {
            console.error(error);
            response.status(500).json({ msg: "Failed to retrieve data" });
        })
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });      
    }
};

export const getCategoryById = async (request : Request, response : Response) => {
    try {
        await categoryCollection.findById(request.params.id)
        .then((category) => {
            console.log(category);
            response.status(200).json({ "Category": category });
        })
        .catch ((error) => {
            console.error(error);
            response.status(500).json({ msg: "No such category" });
        })
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });      
    }
};

export const updateCategoryById = async (request : Request, response : Response) => {
    try {
        await categoryCollection.findOneAndUpdate({_id: request.params.id}, request.body, { new: true })
        .then((updatedCategory) => {
            console.log(updatedCategory);
            response.status(200).json({ msg: "Updated successfully" });
        })
        .catch ((error) => {
            console.error(error);
            response.status(500).json({ msg: "Failed to update" });
        })
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });      
    }
};

export const deleteCategoryById = async (request : Request, response : Response) => {
    try {
        await categoryCollection.findByIdAndDelete(request.params.id)
        .then((deletedcategory) => {
            console.log(deletedcategory);
            response.status(200).json({ msg: "Deleted successfully" });
        })
        .catch ((error) => {
            console.error(error);
            response.status(500).json({ msg: "Failed to delete category" });
        })
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });      
    }
};