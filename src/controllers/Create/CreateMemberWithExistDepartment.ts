import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import logger from "../../logger";

export class CreateMemberWithExistDepartment {
    async handle(request: Request, response: Response) {
        const { name, role, description, id_departments } = request.body

        try {
            if (!name) {
                logger.warn(`member creation with existent department was attempted but it was denied.\nReason: name`)
                return response.status(404).json({ error: "please apply the name." })
            } else if (!role) {
                logger.warn(`member creation with existent department was attempted but it was denied.\nReason: role`)
                return response.status(404).json({ error: "please apply the role." })
            } else if (!description) {
                logger.warn(`member creation with existent department was attempted but it was denied.\nReason: description`)
                return response.status(404).json({ error: "please apply the description." })
            } else if (!id_departments) {
                logger.warn(`member creation with existent department was attempted but it was denied\nReason: id_department`)
                return response.status(404).json({ error: "no id of such department was found!" })
            }

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
        } catch (err) {
            logger.error(`internal server error on CreateMemberWithExistDepartment.ts was found:\n \n ${err}`)
        }

    }
}