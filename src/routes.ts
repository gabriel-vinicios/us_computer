import { Router } from 'express'
import { CreateDepartmentController } from './Controllers/Entities/Department/CreateDepartmentController'
import { CreateDepartmentMembersController } from './Controllers/Entities/DepartmentMembers/CreateDepartmentMembersController'
import { CreateMemberController } from './Controllers/Entities/Members/CreateMemberController'
import { CreateMemberWithExistDepartment } from './Controllers/Entities/Members/CreateMemberWithExistDepartment'
import { FindDepartmentController } from './Controllers/Entities/Department/FindDepartmentController'
import { FindMemberController } from './Controllers/Entities/Members/FindMemberController'
import { UpdateDepartmentController } from './Controllers/Entities/Department/UpdateDepartmentController'
import { UpdateMemberController } from './Controllers/Entities/Members/UpdateMemberController'
import { DeleteDepartmentMembersControllers } from './Controllers/Entities/DepartmentMembers/DeleteDepartmentMembersController'
import { DeleteMemberController } from './Controllers/Entities/Members/DeleteMemberController'
import { DeleteDepartmentController } from './Controllers/Entities/Department/DeleteDepartmentController'
import { FindAllMembersController } from './Controllers/Entities/Members/FindAllMembersController'
import { FindAllDepartmentsMembersController } from './Controllers/Entities/DepartmentMembers/FindAllDepartmentsMembersController'
import { FindAllDepartmentsController } from './Controllers/Entities/Department/FindAllDepartmentsController'

const router = Router()

const createDepartmentMember = new CreateDepartmentMembersController()
const deleteDepartmentMember = new DeleteDepartmentMembersControllers()
const findAllDepartmentsMembers = new FindAllDepartmentsMembersController()

const updateMember = new UpdateMemberController()
const createMember = new CreateMemberController()
const createMemberDepartmentExist = new CreateMemberWithExistDepartment()
const findMember = new FindMemberController()
const deleteMember = new DeleteMemberController()
const findAllMembers = new FindAllMembersController()

const createDepartment = new CreateDepartmentController()
const findDepartment = new FindDepartmentController()
const updateDepartment = new UpdateDepartmentController()
const deleteDepartment = new DeleteDepartmentController()
const findAllDepartment = new FindAllDepartmentsController()


router.post("/createDepartmentMember", createDepartmentMember.handle)
router.delete("/deleteDepartmentMember/:id", deleteDepartmentMember.handle)
router.get("/findAllDepartmentMembers", findAllDepartmentsMembers.handle)

router.post("/createMemberWithExistDepartment", createMemberDepartmentExist.handle)
router.post("/createMember", createMember.handle)
router.put("/updateMember/:id", updateMember.handle)
router.get("/findMember/:id", findMember.handle)
router.delete("/deleteMember/:id", deleteMember.handle)
router.get("/findAllMembers", findAllMembers.handle)

router.get("/findDepartment/:id", findDepartment.handle)
router.put("/updateDepartment/:id", updateDepartment.handle)
router.post("/createDepartment", createDepartment.handle)
router.delete("/deleteDepartment/:id", deleteDepartment.handle)
router.get("/allDepartments", findAllDepartment.handle)

export { router }
