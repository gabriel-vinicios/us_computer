"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindDepartmentController = void 0;
const prismaClient_1 = require("../../../database/prismaClient");
const logger_1 = __importDefault(require("../../../logger"));
class FindDepartmentController {
    async handle(request, response) {
        response.header("Access-Control-Allow-Origin", "*");
        const { id } = request.params;
        try {
            const department = await prismaClient_1.prismaClient.department.findFirst({
                where: {
                    id
                },
                include: {
                    DepartmentMembers: true
                }
            });
            return response.json(department);
        }
        catch (err) {
            logger_1.default.error(`internal server error on FindDepartmentController.ts was found:\n\n ${err}`);
            return response.sendStatus(500);
        }
    }
}
exports.FindDepartmentController = FindDepartmentController;
//# sourceMappingURL=FindDepartmentController.js.map