import { Router } from 'express'
import { CreateDepartmentController } from './controllers/Entities/Department/CreateDepartmentController'
import { CreateDepartmentMembersController } from './controllers/Entities/DepartmentMembers/CreateDepartmentMembersController'
import { CreateMemberController } from './controllers/Entities/Members/CreateMemberController'
import { CreateMemberWithExistDepartment } from './controllers/Entities/Members/CreateMemberWithExistDepartment'
import { FindDepartmentController } from './controllers/Entities/Department/FindDepartmentController'
import { FindMemberController } from './controllers/Entities/Members/FindMemberController'
import { UpdateDepartmentController } from './controllers/Entities/Department/UpdateDepartmentController'
import { UpdateMemberController } from './controllers/Entities/Members/UpdateMemberController'
import { DeleteDepartmentMembersControllers } from './controllers/Entities/DepartmentMembers/DeleteDepartmentMembersController'
import { DeleteMemberController } from './controllers/Entities/Members/DeleteMemberController'
import { DeleteDepartmentController } from './controllers/Entities/Department/DeleteDepartmentController'

const router = Router()

const createDepartmentMember = new CreateDepartmentMembersController()
const deleteDepartmentMember = new DeleteDepartmentMembersControllers()

const updateMember = new UpdateMemberController()
const createMember = new CreateMemberController()
const createMemberDepartmentExist = new CreateMemberWithExistDepartment()
const findMember = new FindMemberController()
const deleteMember = new DeleteMemberController

const createDepartment = new CreateDepartmentController()
const findDepartment = new FindDepartmentController()
const updateDepartment = new UpdateDepartmentController()
const deleteDepartment = new DeleteDepartmentController()

router.post("/departmentMember", createDepartmentMember.handle)
router.delete("/departmentMember/:id", deleteDepartmentMember.handle)

router.post("/memberWithExistDepartment", createMemberDepartmentExist.handle)
router.post("/member", createMember.handle)
router.put("/member/:id", updateMember.handle)
router.get("/member/:id", findMember.handle)
router.delete("/member/:id", deleteMember.handle)

router.get("/department/:id", findDepartment.handle)
router.put("/department/:id", updateDepartment.handle)
router.post("/department", createDepartment.handle)
router.delete("/department/:id", deleteDepartment.handle)

export { router }
