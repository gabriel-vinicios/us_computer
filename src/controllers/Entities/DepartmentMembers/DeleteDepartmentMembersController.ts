import { Request, Response } from "express"
import { prismaClient } from "../../../database/prismaClient"
import logger from "../../../logger"


export class DeleteDepartmentMembersControllers {
    async handle(request: Request, response: Response) {

        const { id } = request.body

        try {
           if(!id) {
            logger.warn("an deletion in DepartmentMembers has been denied")
            return response.status(404).json({error: "no such id of departmentMember was found!"});
            
        }

        const departmentMember = await prismaClient.departmentMembers.delete({
            where: {
                id
            }
        })
        
        logger.info("a departmentMember's row has been deleted")
        return response.json(departmentMember) 
        } catch(err) {
                logger.error(`internal server error on DeleteDepartmentMembersController:\n\n ${err}`)
        }
        
    }
}