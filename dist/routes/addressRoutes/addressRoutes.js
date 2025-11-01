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
const addressController = __importStar(require("../../controllers/addressController"));
const addressRouter = (0, express_1.Router)();
/*
    @usage: Add Address
    @url: http://localhost:5500/api/address/add
    @params: name, email, mobile, flat, landmark, street, city, state, country, pinCode, userObj
    @method: POST
    @access: PUBLIC
*/
addressRouter.post("/add", async (request, response) => {
    await addressController.addAddress(request, response);
});
/*
    @usage: Get all Address
    @url: http://localhost:5500/api/address/add
    @params: no-params
    @method: GET
    @access: PUBLIC
*/
addressRouter.get("/", async (request, response) => {
    await addressController.getAllAddress(request, response);
});
/*
    @usage: Get Address By Id
    @url: http://localhost:5500/api/address/:id
    @params: _id
    @method: GET
    @access: PUBLIC
*/
addressRouter.get("/:id", async (request, response) => {
    await addressController.getAddressById(request, response);
});
/*
    @usage: Update Address
    @url: http://localhost:5500/api/address/updateAddress/:id
    @params: _id
    @method: PUT
    @access: PUBLIC
*/
addressRouter.put("/updateAddress/:id", async (request, response) => {
    await addressController.updateAddressById(request, response);
});
/*
    @usage: Delete Address
    @url: http://localhost:5500/api/address/deleteAddress/:id
    @params: _id
    @method: DELETE
    @access: PUBLIC
*/
addressRouter.delete("/deleteAddress/:id", async (request, response) => {
    await addressController.deleteAddress(request, response);
});
exports.default = addressRouter;
//# sourceMappingURL=addressRoutes.js.map