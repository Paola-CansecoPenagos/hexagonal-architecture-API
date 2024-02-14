import { Request, Response } from 'express';

import { RegisterUserUseCase } from "../../Application/UseCase/RegisterUserUseCase";
import { EmailService } from "../Service/Email";

export class RegisterUserController {

    public emailService!: EmailService;

    constructor(readonly registerUserUseCase:RegisterUserUseCase) {}

    async run(req:Request,res:Response) {
        try {
            //TODO: INSTALAR EXPRESS Y EXPRRESS PARA TYPESCRIPT
            let user = await this.registerUserUseCase.run(req.body);

            this.emailService.run(user);

            return res.status(201).json(user);

        }catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Ocurrió un error desconocido";
            const httpStatus = error instanceof Error && "http_status" in error ? error.http_status : 500;
            return res.status(httpStatus).json({ message: errorMessage });
        }
    }

}