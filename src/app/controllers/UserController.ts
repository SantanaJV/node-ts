import { Request, Response } from 'express'
import User from '../models/User'

class UserController {
  /**
   * Returns all users stored on database
   */
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find({})
    return res.status(200).json(users)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.status(200).json(user)
  }
}
export default new UserController()
