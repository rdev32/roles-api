import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import * as commentController from '../controllers/comment.controller'

const router = Router()

router.get('/comments', asyncHandler(commentController.readComments))

router.get('/comments/:id', asyncHandler(commentController.readComment))

router.post('/comments/:id', asyncHandler(commentController.createComment))

router.put('/comments/:id', asyncHandler(commentController.updateComment))

router.delete('/comments/:id', asyncHandler(commentController.deleteComment))

export default router
