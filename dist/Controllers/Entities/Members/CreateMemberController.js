"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMemberController = void 0;
const prismaClient_1 = require("../../../database/prismaClient");
const logger_1 = __importDefault(require("../../../logger"));
class CreateMemberController {
    async handle(request, response) {
        response.header("Access-Control-Allow-Origin", "*");
        const { name, role, description } = request.body;
        try {
            if (!name) {
                logger_1.default.warn(`department creation was attempted but it was denied. Reason: name`);
                return response.status(404).json({ error: "please apply the name." });
            }
            else if (!role) {
                logger_1.default.warn(`member creation was attempted but it was denied. Reason: role`);
                return response.status(404).json({ error: "please apply the role." });
            }
            else if (!description) {
                logger_1.default.warn(`member creation was attempted but it was denied. Reason: description`);
                return response.status(404).json({ error: "please apply the description." });
            }
            const member = await prismaClient_1.prismaClient.members.create({
                data: {
                    description,
                    name,
                    role
                }
            });
            return response.json(member);
        }
        catch (err) {
            logger_1.default.error(`internal server error on CreateMemberController.ts was found:\n \n ${err}`);
            return response.sendStatus(500);
        }
    }
}
exports.CreateMemberController = CreateMemberController;
//# sourceMappingURL=CreateMemberController.js.map