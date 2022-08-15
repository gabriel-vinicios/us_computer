import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";


export class UpdateMemberController {
    async handle(request: Request, response: Response) {
        const { id } = request.params

        const { name, role, description } = request.body

        const member = prismaClient.members.update({
            where: {
                id
            },

            data: {
                name,
                description,
                role
            }
        })

        response.json(member)

    }

}
