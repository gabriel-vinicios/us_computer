import { Request, Response } from "express"
import { prismaClient } from "../../../database/prismaClient"


export class FindAllDepartmentsMembersController {
    handle(request: Request, response: Response) {

        const members = prismaClient.departmentMembers.findMany()

        return response.json(members)

    }
}
