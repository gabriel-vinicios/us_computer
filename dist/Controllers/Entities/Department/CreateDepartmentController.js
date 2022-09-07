"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDepartmentController = void 0;
const prismaClient_1 = require("../../../database/prismaClient");
const logger_1 = __importDefault(require("../../../logger"));
class CreateDepartmentController {
    async handle(request, response) {
        response.header("Access-Control-Allow-Origin", "*");
        const { name } = request.body;
        const department = await prismaClient_1.prismaClient.department.create({
            data: {
                name
            }
        });
        try {
            if (!name) {
                logger_1.default.warn(`department creation was attempted but it was denied`);
                return response.status(404).json({ error: "please apply the name." });
            }
            logger_1.default.info(`this department was created: \n Name:${department.name}\n \n ID:${department.id}`);
            return response.json(department);
        }
        catch (err) {
            logger_1.default.error(`internal server error on CreateDepartmentController.ts:\n \n ${err}`);
            return response.sendStatus(500);
        }
    }
}
exports.CreateDepartmentController = CreateDepartmentController;
//# sourceMappingURL=CreateDepartmentController.js.map