"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindMemberController = void 0;
const prismaClient_1 = require("../../../database/prismaClient");
const logger_1 = __importDefault(require("../../../logger"));
class FindMemberController {
    async handle(request, response) {
        const { id } = request.params;
        try {
            const member = await prismaClient_1.prismaClient.members.findFirst({
                where: {
                    id
                }
            });
            if (!id) {
                return response.status(404).json({ error: "no id of such member was found!" });
            }
            logger_1.default.info(`this member was searched:\n ${member?.name}`);
            return response.json(member);
        }
        catch (err) {
            logger_1.default.error(`internal server error on FindMemberController.ts was found:\n \n ${err}`);
            return response.sendStatus(500);
        }
    }
}
exports.FindMemberController = FindMemberController;
//# sourceMappingURL=FindMemberController.js.map