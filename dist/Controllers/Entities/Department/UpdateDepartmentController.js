"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDepartmentController = void 0;
const prismaClient_1 = require("../../../database/prismaClient");
const logger_1 = __importDefault(require("../../../logger"));
class UpdateDepartmentController {
    async handle(request, response) {
        const { id } = request.params;
        const { name } = request.body;
        try {
            const department = await prismaClient_1.prismaClient.department.update({
                where: {
                    id
                },
                data: {
                    name
                }
            });
            if (!id) {
                logger_1.default.warn("an department update has been denied, Reason: ID");
                return response.status(404).json({ error: "no such id was found!" });
            }
            if (!name) {
                logger_1.default.warn("an department update has been denied, Reason: Name");
                return response.status(400).json({ error: "don't delete the department's name!" });
            }
            logger_1.default.info(`this department was updated:\n\n Name: ${department.name} \n\n ID: ${department.id}`);
            return response.json(department);
        }
        catch (err) {
            logger_1.default.error(`internal server error on UpdateDepartmentController.ts:\n\n ${err}`);
            return response.sendStatus(500);
        }
    }
}
exports.UpdateDepartmentController = UpdateDepartmentController;
//# sourceMappingURL=UpdateDepartmentController.js.map