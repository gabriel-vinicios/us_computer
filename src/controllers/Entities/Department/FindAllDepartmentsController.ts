import { Request, Response } from "express"
import { prismaClient } from "../../../database/prismaClient"


export class FindAllDepartmentsController {
   async handle(request: Request, response: Response) {
        response.header("Access-Control-Allow-Origin", "*");
        const members = await prismaClient.department.findMany()

        return response.json(members)

    }
}