import { Request, response, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";


export class DeleteDepartmentController {
    async handle(request: Request, response: Response) {

        const { id } = request.body

        const department = await prismaClient.department.delete({
            where: {
                id
            }
        })

        return response.json(department)
    }
    
}