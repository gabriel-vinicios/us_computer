import { Request, Response } from 'express'
import { prismaClient } from '../../../database/prismaClient'
import logger from '../../../logger'

export class FindDepartmentController {
    async handle(request: Request, response: Response) {
        response.header("Access-Control-Allow-Origin", "*");
        const { id } = request.params

        try {
            const department = await prismaClient.department.findFirst({
                where: {
                    id
                },
                include: {
                    DepartmentMembers: true
                }
            })

            return response.json(department)
        } catch (err) {

            logger.error(`internal server error on FindDepartmentController.ts was found:\n\n ${err}`)
            
            return response.sendStatus(500)
        }


    }
}