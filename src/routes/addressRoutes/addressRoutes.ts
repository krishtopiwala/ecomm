import { Router, Request, Response } from "express";
import * as addressController from "../../controllers/addressController";

const addressRouter : Router = Router();

/*
    @usage: Add Address
    @url: http://localhost:5500/api/address/add
    @params: name, email, mobile, flat, landmark, street, city, state, country, pinCode, userObj
    @method: POST
    @access: PUBLIC
*/
addressRouter.post("/add", async (request : Request, response : Response) => {
    await addressController.addAddress(request, response);
});

/*
    @usage: Get all Address
    @url: http://localhost:5500/api/address/add
    @params: no-params
    @method: GET
    @access: PUBLIC
*/
addressRouter.get("/", async (request : Request, response : Response) => {
    await addressController.getAllAddress(request, response);
});

/*
    @usage: Get Address By Id
    @url: http://localhost:5500/api/address/:id
    @params: _id
    @method: GET
    @access: PUBLIC
*/
addressRouter.get("/:id", async (request : Request, response : Response) => {
    await addressController.getAddressById(request, response);
});

/*
    @usage: Update Address
    @url: http://localhost:5500/api/address/updateAddress/:id
    @params: _id
    @method: PUT
    @access: PUBLIC
*/
addressRouter.put("/updateAddress/:id", async (request : Request, response : Response) => {
    await addressController.updateAddressById(request, response);
});

/*
    @usage: Delete Address
    @url: http://localhost:5500/api/address/deleteAddress/:id
    @params: _id
    @method: DELETE
    @access: PUBLIC
*/
addressRouter.delete("/deleteAddress/:id", async (request : Request, response : Response) => {
    await addressController.deleteAddress(request, response);
});

export default addressRouter;