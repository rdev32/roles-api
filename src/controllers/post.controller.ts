import type { Response, Request } from 'express'
import * as service from '../services/post.service'

export async function createPost (req: Request, res: Response): Promise<void> {
  await service.create(req.body)
  res.sendStatus(201)
}

export async function readPost (req: Request, res: Response): Promise<void> {
  const search = await service.read(req.params.id)
  res.status(200).json(search)
}

export async function readPosts (req: Request, res: Response): Promise<void> {
  const posts = await service.readAll()
  res.status(200).json(posts)
}

export async function deletePost (req: Request, res: Response): Promise<void> {
  await service.remove(req.params.id)
  res.sendStatus(204)
}

export async function updatePost (req: Request, res: Response): Promise<void> {
  await service.update(req.params.id, req.body)
  res.sendStatus(204)
}
