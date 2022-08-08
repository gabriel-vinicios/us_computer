import { Router } from 'express'
import { CreateMemberController } from './controllers/CreateMemberController'

const router = Router()

const createMember = new CreateMemberController()

router.post("/member", createMember.handle)

export { router }