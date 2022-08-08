import { Router } from 'express'
import { CreateDepartmentController } from './controllers/CreateDepartmentController'
import { CreateDepartmentMembersController } from './controllers/CreateDepartmentMembersController'
import { CreateMemberController } from './controllers/CreateMemberController'
import { CreateMemberWithExistDepartment } from './controllers/CreateMemberWithExistDepartment'
import { FindDepartmentController } from './controllers/FindDepartmentController'
import { FindMemberController } from './controllers/FindMemberController'

const router = Router()

const createMember = new CreateMemberController()
const createDepartment = new CreateDepartmentController()
const createDepartmentMember = new CreateDepartmentMembersController()
const createMemberDepartmentExist = new CreateMemberWithExistDepartment()

const findMember = new FindMemberController()
const findDepartment = new FindDepartmentController()

router.post("/member", createMember.handle)
router.post("/department", createDepartment.handle)
router.post("/departmentMember", createDepartmentMember.handle)
router.post("/memberWithExistDepartment", createMemberDepartmentExist.handle)

router.get("/member/:id", findMember.handle)
router.get("/department/:id", findDepartment.handle)

export { router }