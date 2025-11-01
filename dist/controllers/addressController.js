"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAddress = exports.updateAddressById = exports.getAddressById = exports.getAllAddress = exports.addAddress = void 0;
const addressSchema_1 = __importDefault(require("../schemas/addressSchema"));
const addAddress = async (request, response) => {
    try {
        let newAddress = request.body;
        await new addressSchema_1.default(newAddress).save()
            .then((newAddress) => {
            console.log(newAddress);
            response.status(201).json({ msg: "Address added successfully" });
        })
            .catch((error) => {
            console.log(error);
            response.status(500).json({ msg: "Failed to add address" });
        });
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};
exports.addAddress = addAddress;
const getAllAddress = async (request, response) => {
    try {
        await addressSchema_1.default.find()
            .then((addresses) => {
            console.log(addresses);
            response.status(200).json({ "Address": addresses });
        })
            .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "No address added" });
        });
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};
exports.getAllAddress = getAllAddress;
const getAddressById = async (request, response) => {
    try {
        await addressSchema_1.default.findById(request.params.id)
            .then((address) => {
            console.log(address);
            response.status(200).json({ "Address": address });
        })
            .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "No such address" });
        });
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};
exports.getAddressById = getAddressById;
const updateAddressById = async (request, response) => {
    try {
        await addressSchema_1.default.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
            .then((updatedAddress) => {
            console.log(updatedAddress);
            response.status(200).json({ msg: "Address updated" });
        })
            .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "No address added" });
        });
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};
exports.updateAddressById = updateAddressById;
const deleteAddress = async (request, response) => {
    try {
        await addressSchema_1.default.findByIdAndDelete(request.params.id)
            .then((deletedAddress) => {
            console.log(deletedAddress);
            response.status(200).json({ msg: "Deleted successfully" });
        })
            .catch((error) => {
            console.error(error);
            response.status(500).json({ msg: "Failed to delete" });
        });
    }
    catch (error) {
        console.error(error);
        response.status(404).json({ msg: "Not Found" });
    }
};
exports.deleteAddress = deleteAddress;
//# sourceMappingURL=addressController.js.map