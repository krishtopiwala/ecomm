import { Request, Response } from "express";
export declare const addProduct: (request: Request, response: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getALLProduct: (request: Request, response: Response) => Promise<void>;
export declare const getProductById: (request: Request, response: Response) => Promise<void>;
export declare const updateProductById: (request: Request, response: Response) => Promise<void>;
export declare const deleteProductById: (request: Request, response: Response) => Promise<void>;
//# sourceMappingURL=productController.d.ts.map