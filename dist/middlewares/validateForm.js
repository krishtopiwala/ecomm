"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateForm = void 0;
const express_validator_1 = require("express-validator");
const validateForm = async (request, response, next) => {
    let errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response.status(401).json({
            msg: errors.array().map(error => error.msg).join("\n")
        });
    }
    else {
        next();
    }
};
exports.validateForm = validateForm;
//# sourceMappingURL=validateForm.js.map