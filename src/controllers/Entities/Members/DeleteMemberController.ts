import { Request, Response } from "express"
import { prismaClient } from "../../../database/prismaClient"
import logger from "../../../logger";


export class DeleteMemberController {
    async handle(request: Request, response: Response) {

        const { id } = request.body

        try {
            if (!id) {
                logger.warn("an deletion in DepartmentMembers has been denied")
                return response.status(404).json({ error: "no such id of departmentMember was found!" });

            }

            const department = await prismaClient.members.delete({
                where: {
                    id
                }
            })

            return response.json(department)
        } catch (err) {
            logger.error(`internal server error on DeleteMemberController.ts was found:\n\n ${err}`)
        }


    }
}
