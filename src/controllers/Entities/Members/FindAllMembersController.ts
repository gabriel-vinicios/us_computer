import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";


export class FindAllMembersController {
    handle(request: Request, response: Response) {

        const members = prismaClient.members.findMany()

        return response.json(members)

    }
}