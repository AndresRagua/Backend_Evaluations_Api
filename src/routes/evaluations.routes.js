import {Router} from 'express'
const router = Router()

import * as evaluationCtrl from '../controllers/evaluation.controller'
import {authJwt} from '../middlewares'

router.get('/', evaluationCtrl.getEvaluations)

router.post('/', [authJwt.verifyToken, authJwt.isManager], evaluationCtrl.createEvaluation)

router.put('/:evaluationId', [authJwt.verifyToken, authJwt.isAdmin], evaluationCtrl.updateEvaluationById)

router.delete('/:evaluationId', [authJwt.verifyToken, authJwt.isAdmin], evaluationCtrl.deleteEvaluationById)


export default router;