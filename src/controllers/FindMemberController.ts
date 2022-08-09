import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import logger from "../logger";

export class FindMemberController {
    async handle(request: Request, response: Response) {
        const { id } = request.params


        try {
            const member = await prismaClient.members.findFirst({
                where: {
                    id
                }
            })

            if(!id){
                return response.status(404).json({ error: "no id of such member was found!" })
            }

            logger.info(`this member was searched:\n ${member?.name}`)

            return response.json(member)
        } catch (err) {
            logger.error(`internal server error on FindMemberController.ts was found:\n \n ${err}`)
        }

    }
}