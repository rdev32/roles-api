import type { Request, Response } from 'express'
import { prismaError } from 'prisma-better-errors'
import { HttpError } from 'http-errors'
import { z } from 'zod'

export default function errorHandler (error: unknown, req: Request, res: Response): void {
  try {
    if (error instanceof z.ZodError) {
      res.status(422).json(error.issues)
    } else if (error instanceof prismaError) {
      res.status(error.statusCode).json({
        title: error.title,
        message: error.message,
        where: error.metaData
      })
    } else if (error instanceof HttpError) {
      res.status(error.status).json(error.message)
    } else {
      res.status(500).json('Internal server error.')
    }
  } catch (err) {
    console.error(err)
  }
}
