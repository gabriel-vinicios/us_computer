import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";


export class CreateMemberController {
    async handle(request: Request, response: Response) {
        const { name, role, description } = request.body

        const member = await prismaClient.members.create({
            data: {
               description,
               name,
               role 
            }
        })

        return response.json(member)
    }
}