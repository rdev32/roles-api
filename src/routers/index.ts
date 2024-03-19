import { Router } from 'express'
import commentsRoutes from './comment.router'
import postRoutes from './post.router'
import staffRoutes from './staff.router'
import userRoutes from './user.router'
import tokenRoutes from './token.router'

const router = Router()

router.use('/api/v1', postRoutes)
router.use('/api/v1', commentsRoutes)
router.use('/api/v1', staffRoutes)
router.use('/api/v1', userRoutes)
router.use('/api/v1', tokenRoutes)

export default router
