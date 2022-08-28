import { Request, Response } from "express"
import { prismaClient } from "../../../database/prismaClient"


export class FindAllDepartmentsMembersController {
   async handle(request: Request, response: Response) {

        const members = await prismaClient.departmentMembers.findMany()

        return response.json(members)

    }
}
