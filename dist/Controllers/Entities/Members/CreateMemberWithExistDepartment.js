"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMemberWithExistDepartment = void 0;
const prismaClient_1 = require("../../../database/prismaClient");
const logger_1 = __importDefault(require("../../../logger"));
class CreateMemberWithExistDepartment {
    async handle(request, response) {
        response.header("Access-Control-Allow-Origin", "*");
        const { name, role, description, id_departments } = request.body;
        try {
            if (!name) {
                logger_1.default.warn(`member creation with existent department was attempted but it was denied.\nReason: name`);
                return response.status(404).json({ error: "please apply the name." });
            }
            else if (!role) {
                logger_1.default.warn(`member creation with existent department was attempted but it was denied.\nReason: role`);
                return response.status(404).json({ error: "please apply the role." });
            }
            else if (!description) {
                logger_1.default.warn(`member creation with existent department was attempted but it was denied.\nReason: description`);
                return response.status(404).json({ error: "please apply the description." });
            }
            else if (!id_departments) {
                logger_1.default.warn(`member creation with existent department was attempted but it was denied\nReason: id_department`);
                return response.status(404).json({ error: "no id of such department was found!" });
            }
            const member = await prismaClient_1.prismaClient.departmentMembers.create({
                data: {
                    members: {
                        create: {
                            description,
                            name,
                            role
                        }
                    },
                    departments: {
                        connect: {
                            id: id_departments
                        }
                    }
                }
            });
            return response.json(member);
        }
        catch (err) {
            logger_1.default.error(`internal server error on CreateMemberWithExistDepartment.ts was found:\n \n ${err}`);
            return response.sendStatus(500);
        }
    }
}
exports.CreateMemberWithExistDepartment = CreateMemberWithExistDepartment;
//# sourceMappingURL=CreateMemberWithExistDepartment.js.map