"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllDepartmentsMembersController = void 0;
const prismaClient_1 = require("../../../database/prismaClient");
class FindAllDepartmentsMembersController {
    handle(request, response) {
        const members = prismaClient_1.prismaClient.departmentMembers.findMany();
        return response.json(members);
    }
}
exports.FindAllDepartmentsMembersController = FindAllDepartmentsMembersController;
//# sourceMappingURL=FindAllDepartmentsMembersController.js.map