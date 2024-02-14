import { User } from "../../Domain/Entity/User";

export interface EmailPort {
    sendActivationEmail(user: User): Promise<void>;
}