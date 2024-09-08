import {Router} from 'express'
const router = Router()

import * as employeesCtrl from '../controllers/employees.controller'
import {authJwt} from '../middlewares'

router.get('/', employeesCtrl.getEmployees)

router.post('/', [authJwt.verifyToken, authJwt.isManager], employeesCtrl.createEmployee)

router.get('/:employeesId', employeesCtrl.getEmployeeById)

router.put('/:employeesId', [authJwt.verifyToken, authJwt.isAdmin], employeesCtrl.updateEmployeeById)

router.delete('/:employeesId', [authJwt.verifyToken, authJwt.isAdmin], employeesCtrl.deleteEmployeeById)


export default router;