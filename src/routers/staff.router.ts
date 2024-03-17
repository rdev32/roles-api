import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import * as staffController from '../controllers/staff.controller'

const router = Router()

router.get('/staff', asyncHandler(staffController.readStaffs))

router.get('/staff/:id', asyncHandler(staffController.readStaff))

router.post('/staff/:id', asyncHandler(staffController.createStaff))

router.put('/staff/:id', asyncHandler(staffController.updateStaff))

router.delete('/staff/:id', asyncHandler(staffController.deleteStaff))

export default router
