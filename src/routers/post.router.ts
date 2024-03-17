import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import * as controller from '../controllers/post.controller'

const router = Router()

router.get('/posts', asyncHandler(controller.readPosts))
router.get('/posts/:id', asyncHandler(controller.readPost))
router.post('/posts/:id', asyncHandler(controller.createPost))
router.put('/posts/:id', asyncHandler(controller.updatePost))
router.delete('/posts/:id', asyncHandler(controller.deletePost))

export default router
