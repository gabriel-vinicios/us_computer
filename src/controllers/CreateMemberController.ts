import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import logger from "../logger";


export class CreateMemberController {
    async handle(request: Request, response: Response) {
        const { name, role, description } = request.body


        try {

            if(!name){
                logger.warn(`department creation was attempted but it was denied. Reason: name`)
                return response.status(404).json({error:"please apply the name."})

            } else if(!role) {
                logger.warn(`member creation was attempted but it was denied. Reason: role`)
                return response.status(404).json({error:"please apply the role."})

            } else if(!description) {
                logger.warn(`member creation was attempted but it was denied. Reason: description`)
                return response.status(404).json({error:"please apply the description."})

            }

            const member = await prismaClient.members.create({
                data: {
                    description,
                    name,
                    role
                }
            })

            return response.json(member)
        } catch (err) {
            logger.error(`internal server error on CreateMemberController.ts was found:\n \n ${err}`)
        }

    }
}