import { Request, Response } from 'express'
import { prismaClient } from '../database/prismaClient'

export class FindDepartmentController {
    async handle(request: Request, response: Response) {
        const { id } = request.params

        const department = await prismaClient.department.findFirst({
            where:{
                id
            },
            include: {
                DepartmentMembers: true
            }
        })

        return response.json(department)
    }
}