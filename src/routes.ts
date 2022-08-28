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


router.post("/departmentMember", createDepartmentMember.handle)
router.delete("/departmentMember/:id", deleteDepartmentMember.handle)
router.get("/allDepartmentMembers", findAllDepartmentsMembers.handle)

router.post("/memberWithExistDepartment", createMemberDepartmentExist.handle)
router.post("/member", createMember.handle)
router.put("/member/:id", updateMember.handle)
router.get("/member/:id", findMember.handle)
router.delete("/member/:id", deleteMember.handle)
router.get("/allMembers", findAllMembers.handle)

router.get("/department/:id", findDepartment.handle)
router.put("/department/:id", updateDepartment.handle)
router.post("/department", createDepartment.handle)
router.delete("/department/:id", deleteDepartment.handle)
router.get("/allDepartments", findAllDepartment.handle)

export { router }
