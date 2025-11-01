import { Request, Response } from "express";
export declare const registerUser: (request: Request, response: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAllUser: (request: Request, response: Response) => Promise<void>;
export declare const getUserById: (request: Request, response: Response) => Promise<void>;
export declare const updateUserById: (request: Request, response: Response) => Promise<void>;
export declare const deleteUserById: (request: Request, response: Response) => Promise<void>;
export declare const loginUser: (request: Request, response: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=userController.d.ts.map