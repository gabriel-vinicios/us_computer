import { Request, Response } from "express"
import { prismaClient } from "../../../database/prismaClient"


export class DeleteDepartmentMembersControllers {
    async handle(request: Request, response: Response) {

        const { id } = request.body

        const department = await prismaClient.departmentMembers.delete({
            where: {
                id
            }
        })

        return response.json(department)
    }
}