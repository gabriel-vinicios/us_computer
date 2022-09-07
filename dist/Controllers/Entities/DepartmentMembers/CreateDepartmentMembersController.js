"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDepartmentMembersController = void 0;
const prismaClient_1 = require("../../../database/prismaClient");
const logger_1 = __importDefault(require("../../../logger"));
class CreateDepartmentMembersController {
    async handle(request, response) {
        const { id_members, id_departments } = request.body;
        response.header("Access-Control-Allow-Origin", "*");
        try {
            if (!id_members) {
                logger_1.default.warn(`department_member creation was attempted but it was denied`);
                return response.status(404).json({ error: "no id of such member found!" });
            }
            if (!id_departments) {
                logger_1.default.warn(`department_member creation was attempted but it was denied`);
                return response.status(404).json({ error: "no id of such department found!" });
            }
            const departmentMembers = await prismaClient_1.prismaClient.departmentMembers.create({
                data: {
                    id_departments,
                    id_members
                }
            });
            return response.json(departmentMembers);
        }
        catch (err) {
            logger_1.default.error(`internal server error on CreateDepartmentMembersController.ts was found:\n \n ${err}`);
            return response.sendStatus(500);
        }
    }
}
exports.CreateDepartmentMembersController = CreateDepartmentMembersController;
//# sourceMappingURL=CreateDepartmentMembersController.js.map