import { UserInterface } from "../../Domain/Port/UserInterface";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class LoginUserUseCase {
    constructor(private repository: UserInterface) {}

    async run(email: string, password: string): Promise<string> {
        const user = await this.repository.searchUserByEmail(email);
        if (!user) {
            throw new Error("Usuario no encontrado");
        }

        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            throw new Error("Contraseña incorrecta");
        }

        const token = jwt.sign({ userId: user.uuid, email: user.email }, process.env.JWT_SECRET!, { expiresIn: '1h' });

        return token;
    }
}
