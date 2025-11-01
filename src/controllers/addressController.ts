import { Request, Response } from "express";
import { IAddress } from "../models/IAddress";
import addressCollection from "../schemas/addressSchema";

export const addAddress = async (request : Request, response : Response) => {
    try {
        let newAddress = request.body;
        await new addressCollection(newAddress).save()
        .then((newAddress) => {
            console.log(newAddress);
            response.status(201).json({ msg: "Address added successfully" });
        })
        .catch((error) => {
            console.log(error);
            response.status(500).json({ msg: "Failed to add address" });
        })
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};

export const getAllAddress = async (request : Request, response : Response) => {
    try {
        await addressCollection.find()
        .then((addresses) => {
            console.log(addresses);
            response.status(200).json({ "Address": addresses });
        })
        .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "No address added" });
        })
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};

export const getAddressById = async (request : Request, response : Response) => {
    try {
        await addressCollection.findById(request.params.id)
        .then((address) => {
            console.log(address);
            response.status(200).json({ "Address": address });
        })
        .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "No such address" });
        })
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};

export const updateAddressById = async (request : Request, response : Response) => {
    try {
        await addressCollection.findOneAndUpdate({_id: request.params.id}, request.body, { new: true })
        .then((updatedAddress) => {
            console.log(updatedAddress);
            response.status(200).json({ msg: "Address updated" });
        })
        .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "No address added" });
        })
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};

export const deleteAddress = async (request : Request, response : Response) => {
    try {
        await addressCollection.findByIdAndDelete(request.params.id)
        .then((deletedAddress) => {
            console.log(deletedAddress);
            response.status(200).json({ msg: "Deleted successfully" });
        })
        .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "Failed to delete" });
        })
    } catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};