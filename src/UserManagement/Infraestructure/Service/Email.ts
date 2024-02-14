import { EmailPort } from "./EmailPort";
import { User } from "../../Domain/Entity/User";
import nodemailer from 'nodemailer';

export class Email implements EmailPort {
    async sendActivationEmail(user: User, activationLink: string): Promise<void> {
        const transporter = nodemailer.createTransport({
        });

        await transporter.sendMail({
            from: '"Soporte" <soporte@tuDominio.com>',
            to: user.email,
            subject: "Activación de Cuenta",
            html: `Hola, ${user.name}!<br>Por favor, activa tu cuenta haciendo clic en el siguiente enlace: <a href="${activationLink}">Activar Cuenta</a>`,
        });
    }
}
