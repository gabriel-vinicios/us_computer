import express from "express"
import { router } from "./routes"
import logger from './logger'
import cors from 'cors'

const app = express()
const BASE_URL = process.env.BASE_URL
const PORT = process.env.PORT

app.use(express.json())
app.use(router)
app.use(cors())

try{

app.listen(PORT, () => console.log(`Server is on ${BASE_URL}`))
logger.info("the server has been activated or updated")

} catch(err) {

logger.error(`the server was unable to be activated or was interrupted by the error: \n${err}`)

}