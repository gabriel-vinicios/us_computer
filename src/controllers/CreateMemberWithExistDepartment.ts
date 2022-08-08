import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateMemberWithExistDepartment {
    async handle(request: Request, response: Response){
        const { name, role, description, id_departments } = request.body

        const member = await prismaClient.departmentMembers.create({
            data: {
                members: {
                    create: {
                        description,
                        name,
                        role
                    }
                },
                departments: {
                    connect: {
                        id: id_departments
                    }
                }
            }
        })

        return response.json(member)
    }
}