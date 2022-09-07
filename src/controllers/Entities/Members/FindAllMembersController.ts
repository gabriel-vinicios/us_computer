import { Request, Response } from "express";
import { prismaClient } from "../../../database/prismaClient";


export class FindAllMembersController {
  async handle(request: Request, response: Response) {
    response.header("Access-Control-Allow-Origin", "*");
        const members = await prismaClient.members.findMany()

        return response.json(members)

    }
}