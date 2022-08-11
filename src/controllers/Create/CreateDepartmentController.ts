
import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import logger from "../../logger";

export class CreateDepartmentController {
    async handle(request: Request, response: Response){
        
            const { name } = request.body

        
            const department = await prismaClient.department.create({
                data:{
                    name
                }
            })
         try{   
            if(!name){
                logger.warn(`department creation was attempted but it was denied`)
                return response.status(404).json({error:"please apply the name."})
            }

            logger.info(`this department was created: \n Name:${department.name}\n \n ID:${department.id}`)

            return response.json(department) 

      } catch(err) {

            logger.error(`internal server error on CreateDepartmentController.ts:\n \n ${err}`)

            return response.sendStatus(500)

        }
    }
}