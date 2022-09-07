"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMemberController = void 0;
const prismaClient_1 = require("../../../database/prismaClient");
const logger_1 = __importDefault(require("../../../logger"));
class UpdateMemberController {
    async handle(request, response) {
        response.header("Access-Control-Allow-Origin", "*");
        const { id } = request.params;
        const { name, role, description } = request.body;
        try {
            if (!id) {
                logger_1.default.warn("an update in Members has been denied , Reason: ID");
                return response.status(404).json({ error: "no such id of department was found!" });
            }
            if (!name) {
                logger_1.default.warn("an update in Members has been denied , Reason: Name");
                return response.status(404).json({ error: "don't delete the member's name!" });
            }
            if (!role) {
                logger_1.default.warn("an update in Members has been denied , Reason: Role");
                return response.status(404).json({ error: "don't delete the member's role!" });
            }
            if (!description) {
                logger_1.default.warn("an update in Members has been denied , Reason: Role");
                return response.status(404).json({ error: "don't delete the member's description!" });
            }
            const member = await prismaClient_1.prismaClient.members.update({
                where: {
                    id
                },
                data: {
                    name,
                    description,
                    role
                }
            });
            logger_1.default.info(`this member was updated:\n Name:${member?.name} \n\n ID:${member.id} \n\n Description:${member.description} \n\n Role:${member.role}`);
            return response.json(member);
        }
        catch (err) {
            logger_1.default.error(`internal server error on DeleteDepartmentController.ts was found:\n\n ${err}`);
            return response.sendStatus(500);
        }
    }
}
exports.UpdateMemberController = UpdateMemberController;
//# sourceMappingURL=UpdateMemberController.js.map