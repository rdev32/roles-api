import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import * as tokenController from '../controllers/token.controller'

const router = Router()

router.get('/tokens', asyncHandler(tokenController.readTokens))

router.get('/tokens/:id', asyncHandler(tokenController.readToken))

router.post('/tokens/:id', asyncHandler(tokenController.createToken))

router.put('/tokens/:id', asyncHandler(tokenController.updateToken))

router.delete('/tokens/:id', asyncHandler(tokenController.deleteToken))

export default router
