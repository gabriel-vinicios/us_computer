import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateDepartmentMembersController{
    async handle(request: Request, response: Response){
        const { id_members, id_departments } = request.body

        const departmentMembers = await prismaClient.departmentMembers.create({
            data:{
                id_departments,
                id_members
            }
        })

        return response.json(departmentMembers)
    }
}