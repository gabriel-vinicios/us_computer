"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllMembersController = void 0;
const prismaClient_1 = require("../../../database/prismaClient");
class FindAllMembersController {
    async handle(request, response) {
        response.header("Access-Control-Allow-Origin", "*");
        const members = await prismaClient_1.prismaClient.members.findMany();
        return response.json(members);
    }
}
exports.FindAllMembersController = FindAllMembersController;
//# sourceMappingURL=FindAllMembersController.js.map