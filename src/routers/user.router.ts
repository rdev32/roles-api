import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import * as userController from '../controllers/user.controller'

const router = Router()

router.get('/users', asyncHandler(userController.readUsers))

router.get('/users/:id', asyncHandler(userController.readUser))

router.post('/users/:id', asyncHandler(userController.createUser))

router.put('/users/:id', asyncHandler(userController.updateUser))

router.delete('/users/:id', asyncHandler(userController.deleteUser))

export default router
