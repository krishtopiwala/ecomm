"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductById = exports.updateProductById = exports.getProductById = exports.getALLProduct = exports.addProduct = void 0;
const productSchema_1 = __importDefault(require("../schemas/productSchema"));
const cloudinary_config_1 = __importDefault(require("../config/cloudinary-config"));
const addProduct = async (request, response) => {
    try {
        let { title, description, brand, price, quantity, sold, userObj, categoryObj } = request.body;
        let imageUrl = "";
        if (!request.file) {
            return response.status(400).send("No file uploaded.");
        }
        if (request.file) {
            const result = await cloudinary_config_1.default.uploader.upload(request.file.path);
            console.log("Cloudinary: ", result);
            imageUrl = result.secure_url;
            console.log(imageUrl);
        }
        let newProduct = {
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
        await new productSchema_1.default(newProduct).save()
            .then((newProduct) => {
            console.log(newProduct);
            response.status(201).json({ msg: "Product added" });
        })
            .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "Unable to add product" });
        });
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};
exports.addProduct = addProduct;
const getALLProduct = async (request, response) => {
    try {
        await productSchema_1.default.find()
            .then((products) => {
            console.log(products);
            response.status(200).json({ "Product": products });
        })
            .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "No products added yet" });
        });
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};
exports.getALLProduct = getALLProduct;
const getProductById = async (request, response) => {
    try {
        await productSchema_1.default.findById(request.params.id)
            .then((products) => {
            console.log(products);
            response.status(200).json({ "Product": products });
        })
            .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "No such products" });
        });
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};
exports.getProductById = getProductById;
const updateProductById = async (request, response) => {
    try {
        await productSchema_1.default.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
            .then((updatedProduct) => {
            console.log(updatedProduct);
            response.status(200).json({ msg: "Product updated successfully" });
        })
            .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "Failed to update product" });
        });
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};
exports.updateProductById = updateProductById;
const deleteProductById = async (request, response) => {
    try {
        await productSchema_1.default.findByIdAndDelete(request.params.id)
            .then((deletedProduct) => {
            console.log(deletedProduct);
            response.status(200).json({ msg: "Product deleted successfully" });
        })
            .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "Not Found" });
        });
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};
exports.deleteProductById = deleteProductById;
//# sourceMappingURL=productController.js.map