import { Request, Response } from "express";
import { IProduct } from "../models/IProduct";
import productCollection from "../schemas/productSchema";
import cloudinary from "../config/cloudinary-config";

export const addProduct = async (request : Request, response : Response) => {
    try {
        let { title, description, brand, price, quantity, sold, userObj, categoryObj } = request.body;

        let imageUrl = "";

        if (!request.file) {
            return response.status(400).send("No file uploaded.");
        }

        if (request.file) {
            const result = await cloudinary.uploader.upload(request.file.path);
            console.log("Cloudinary: ", result);
            imageUrl = result.secure_url;
            console.log(imageUrl);
        }

        let newProduct : IProduct = {
            title: title,
            description: description,
            imageUrl: imageUrl,
            brand: brand,
            price: price,
            quantity: quantity,
            sold: sold,
            userObj: userObj,
            categoryObj: categoryObj
        };

        await new productCollection(newProduct).save()
        .then((newProduct) => {
            console.log(newProduct);
            response.status(201).json({ msg: "Product added" });
        })
        .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "Unable to add product" });
        })
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};

export const getALLProduct = async (request : Request, response : Response) => {
    try {
        await productCollection.find()
        .then((products) => {
            console.log(products);
            response.status(200).json({ "Product": products });
        })
        .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "No products added yet" });
        })
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};

export const getProductById = async (request : Request, response : Response) => {
    try {
        await productCollection.findById(request.params.id)
        .then((products) => {
            console.log(products);
            response.status(200).json({ "Product": products });
        })
        .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "No such products" });
        })
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};

export const updateProductById = async (request : Request, response : Response) => {
    try {
        await productCollection.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then((updatedProduct) => {
            console.log(updatedProduct);
            response.status(200).json({ msg: "Product updated successfully" });
        })
        .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "Failed to update product" });
        })
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};

export const deleteProductById = async (request : Request, response : Response) => {
    try {
        await productCollection.findByIdAndDelete(request.params.id)
        .then((deletedProduct) => {
            console.log(deletedProduct);
            response.status(200).json({ msg: "Product deleted successfully" });
        })
        .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "Not Found" });
        })
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};