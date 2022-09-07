"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDepartmentController = void 0;
const prismaClient_1 = require("../../../database/prismaClient");
const logger_1 = __importDefault(require("../../../logger"));
class DeleteDepartmentController {
    async handle(request, response) {
        response.header("Access-Control-Allow-Origin", "*");
        const { id } = request.body;
        try {
            if (!id) {
                logger_1.default.warn("an deletion in DepartmentMembers has been denied");
                return response.status(404).json({ error: "no such id of department was found!" });
            }
            const department = await prismaClient_1.prismaClient.department.delete({
                where: {
                    id
                }
            });
            logger_1.default.info(`this department was deleted: ${department.name}`);
            return response.json(department);
        }
        catch (err) {
            logger_1.default.error(`internal server error on DeleteDepartmentController.ts was found:\n\n ${err}`);
            return response.sendStatus(500);
        }
    }
}
exports.DeleteDepartmentController = DeleteDepartmentController;
//# sourceMappingURL=DeleteDepartmentController.js.map