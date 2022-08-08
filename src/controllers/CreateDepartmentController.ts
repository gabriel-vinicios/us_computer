import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateDepartmentController {
    async handle(request: Request, response: Response){
        const { name } = request.body

        
        const department = await prismaClient.department.create({
            data:{
                name
            }
        })

        return response.json(department)
    }
}