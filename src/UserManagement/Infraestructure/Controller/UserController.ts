import { Request, Response } from 'express';
import { LoginUserUseCase } from '../../Application/UseCase/LoginUserUseCase';

export class UserController {
    constructor(private loginUserUseCase: LoginUserUseCase) {}

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const token = await this.loginUserUseCase.run(email, password);
            res.json({ token });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}
