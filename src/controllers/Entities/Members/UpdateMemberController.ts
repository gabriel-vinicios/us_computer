import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";
import logger from "../../../logger";


export class UpdateMemberController {
    async handle(request: Request, response: Response) {
        const { id } = request.params

        const { name, role, description } = request.body

        try {

            if(!id) {
                logger.warn("an update in Members has been denied , Reason: ID")
                return response.status(404).json({error: "no such id of department was found!"});
            }
            
            if(!name) {
                logger.warn("an update in Members has been denied , Reason: Name")
                return response.status(404).json({error: "don't delete the member's name!"});
            }

            if(!role) {
                logger.warn("an update in Members has been denied , Reason: Role")
                return response.status(404).json({error: "don't delete the member's role!"});
            }

            if(!description) {
                logger.warn("an update in Members has been denied , Reason: Role")
                return response.status(404).json({error: "don't delete the member's description!"});
            }

            const member = await prismaClient.members.update({
                where: {
                    id
                },

                data: {
                    name,
                    description,
                    role
                }
            })

            logger.info(`this member was updated:\n Name:${member?.name} \n\n ID:${member.id} \n\n Description:${member.description} \n\n Role:${member.role}`)
            return response.json(member)
        } catch (err) {
            logger.error(`internal server error on DeleteDepartmentController.ts was found:\n\n ${err}`)
        }




    }

}
