import { Contact } from "./Contact";
import { Credential } from "./Credential";
import { Status } from "./Status";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class User {
    public uuid: string;
    public name: string;
    public lastName: string;
    public cellphone: string; 
    public email: string; 
    private password: string;
    public activationToken: string;
    public verifiedAt: Date | null;

    constructor(name: string, lastName: string, cellphone: string, email: string, password: string) {
        this.uuid = this.generateUuid();
        this.name = name;
        this.lastName = lastName;
        this.cellphone = cellphone;
        this.email = email;
        this.password = this.hashPassword(password);
        this.activationToken = this.generateActivationToken();
        this.verifiedAt = null;
    }

    generateUuid():string {
        return "";
    }

    private hashPassword(password: string): string {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }

    private generateActivationToken(): string {
        return jwt.sign({ email: this.email }, process.env.JWT_SECRET, { expiresIn: '24h' });
    }

    public validatePassword(password: string): boolean {
        return bcrypt.compareSync(password, this.password);
    }

    public setPassword(password: string): void {
        this.password = this.hashPassword(password);
    }

    public setVerifiedAt(): void {
        this.verifiedAt = new Date();
    }
}
