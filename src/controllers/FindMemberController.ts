import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindMemberController {
    async handle(request: Request, response: Response) {
        const { id } = request.params

        const member = await prismaClient.members.findFirst({
            where: {
                id
            }
        })

        return response.json(member)
    }
}