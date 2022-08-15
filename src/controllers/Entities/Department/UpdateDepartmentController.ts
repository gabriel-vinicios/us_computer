import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";


export class UpdateDepartmentController {
    async handle(request: Request, response: Response) {

        const { id } = request.params
        const { name } = request.body

        const department = await prismaClient.department.update({
            where: {
                id
            },

            data: {
                name
            }

           
        })

        return response.json(department)
    }
}