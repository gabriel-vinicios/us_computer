"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDepartmentMembersControllers = void 0;
const prismaClient_1 = require("../../../database/prismaClient");
const logger_1 = __importDefault(require("../../../logger"));
class DeleteDepartmentMembersControllers {
    async handle(request, response) {
        response.header("Access-Control-Allow-Origin", "*");
        const { id } = request.body;
        try {
            if (!id) {
                logger_1.default.warn("an deletion in DepartmentMembers has been denied");
                return response.status(404).json({ error: "no such id of departmentMember was found!" });
            }
            const departmentMember = await prismaClient_1.prismaClient.departmentMembers.delete({
                where: {
                    id
                }
            });
            logger_1.default.info("a departmentMember's row has been deleted");
            return response.json(departmentMember);
        }
        catch (err) {
            logger_1.default.error(`internal server error on DeleteDepartmentMembersController:\n\n ${err}`);
            return response.sendStatus(500);
        }
    }
}
exports.DeleteDepartmentMembersControllers = DeleteDepartmentMembersControllers;
//# sourceMappingURL=DeleteDepartmentMembersController.js.map