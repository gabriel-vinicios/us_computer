import { Request, Response } from "express"
import { prismaClient } from "../../../database/prismaClient"


export class FindAllDepartmentsController {
    handle(request: Request, response: Response) {

        const members = prismaClient.department.findMany()

        return response.json(members)

    }
}