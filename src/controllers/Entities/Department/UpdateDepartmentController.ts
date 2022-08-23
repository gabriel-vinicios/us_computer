import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";
import logger from "../../../logger";


export class UpdateDepartmentController {
    async handle(request: Request, response: Response) {
        const { id } = request.params
        const { name } = request.body

        try {
            const department = await prismaClient.department.update({
                where: {
                    id
                },

                data: {
                    name
                }


            })

            if(!id) {
                logger.warn("an department update has been denied, Reason: ID")
                return response.status(404).json({error: "no such id was found!"})
            }

            if(!name) {
                logger.warn("an department update has been denied, Reason: Name")
                return response.status(400).json({error: "don't delete the department's name!"})
            }
            
            logger.info(`this department was updated:\n\n Name: ${department.name} \n\n ID: ${department.id}`)
            return response.json(department)
        } catch (err) {
            logger.error(`internal server error on UpdateDepartmentController.ts:\n\n ${err}`)
        }



    }
}