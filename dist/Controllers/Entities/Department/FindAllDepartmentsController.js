"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllDepartmentsController = void 0;
const prismaClient_1 = require("../../../database/prismaClient");
class FindAllDepartmentsController {
    async handle(request, response) {
        const members = await prismaClient_1.prismaClient.department.findMany();
        return response.json(members);
    }
}
exports.FindAllDepartmentsController = FindAllDepartmentsController;
//# sourceMappingURL=FindAllDepartmentsController.js.map