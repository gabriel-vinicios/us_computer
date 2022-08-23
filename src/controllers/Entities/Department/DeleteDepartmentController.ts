import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";
import logger from "../../../logger";


export class DeleteDepartmentController {
    async handle(request: Request, response: Response) {

        const { id } = request.body

        try {
            if(!id) {
             logger.warn("an deletion in DepartmentMembers has been denied")
             return response.status(404).json({error: "no such id of department was found!"});
             
         }

        const department = await prismaClient.department.delete({
            where: {
                id
            }
        })
        logger.info(`this department was deleted: ${department.name}`)
        return response.json(department)
    } catch(err) {
        logger.error(`internal server error on DeleteDepartmentController.ts was found:\n\n ${err}`)
        return response.sendStatus(500)
    }

    
    }
    
}