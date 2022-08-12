import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";
import logger from "../../../logger";

export class CreateDepartmentMembersController {
    async handle(request: Request, response: Response) {
        const { id_members, id_departments } = request.body


        try {
            if (!id_members) {
                logger.warn(`department_member creation was attempted but it was denied`)
                return response.status(404).json({ error: "no id of such member found!" })
            }

            if (!id_departments) {
                logger.warn(`department_member creation was attempted but it was denied`)
                return response.status(404).json({ error: "no id of such department found!" })
            }

            const departmentMembers = await prismaClient.departmentMembers.create({
                data: {
                    id_departments,
                    id_members
                }
            })

            return response.json(departmentMembers)
        } catch (err) {
            logger.error(`internal server error on CreateDepartmentMembersController.ts was found:\n \n ${err}`)
        }

    }
}