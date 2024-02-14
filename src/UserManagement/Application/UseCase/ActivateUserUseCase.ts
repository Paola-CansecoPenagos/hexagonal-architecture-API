import { UserInterface } from "../../Domain/Port/UserInterface";

export class ActivateUserUseCase {
    constructor(private repository: UserInterface) {}

    async run(activationToken: string): Promise<void> {
        const user = await this.repository.searchUserByActivationToken(activationToken);
        if (!user) throw new Error("Activación fallida: Usuario no encontrado.");
        user.setVerifiedAt();
        await this.repository.updateUserVerifiedAt(user);
    }
}
