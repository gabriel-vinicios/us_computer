import { Request, Response } from "express"
import { prismaClient } from "../../../database/prismaClient"


export class DeleteMemberController {
    async handle(request: Request, response: Response) {

        const { id } = request.body

        const department = await prismaClient.members.delete({
            where: {
                id
            }
        })

        return response.json(department)
    }
}