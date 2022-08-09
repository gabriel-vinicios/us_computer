import express from "express"
import { router } from "./routes"
import logger from './logger'


const app = express()
const PORT = 4003

app.use(express.json())
app.use(router)

try{

app.listen(4003, () => console.log(`Server is on PORT ${PORT}`))
logger.info("the server has been activated or updated")

} catch(err) {

logger.error(`the server was unable to be activated or was interrupted by the error: \n${err}`)

}