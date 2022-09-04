import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";


export class FindAllMembersController {
  async handle(request: Request, response: Response) {

        const members = await prismaClient.members.findMany()

        return response.json(members)

    }
}