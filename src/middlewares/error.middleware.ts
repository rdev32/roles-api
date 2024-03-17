import type { Request, Response, NextFunction } from 'express'
import { prismaError } from 'prisma-better-errors'
import { type HttpError } from 'http-errors'
import { z } from 'zod'

export default function errorHandler (error: HttpError | z.ZodError, req: Request, res: Response, next: NextFunction): void {
  try {
    if (error instanceof z.ZodError) {
      res.status(422).json(error.issues)
    } else if (error instanceof prismaError) {
      res.status(error.statusCode).json({
        title: error.title,
        message: error.message,
        where: error.metaData
      })
    } else {
      res.status(error.status ?? 500).json(error.message ?? 'Internal server error.')
    }
  } catch (err) {
    console.error(err)
  }
}
