import { Contact } from "../../Domain/Entity/Contact";
import { Credential } from "../../Domain/Entity/Credential";
import { Status } from "../../Domain/Entity/Status";
import { User } from "../../Domain/Entity/User";
import { UserInterface } from "../../Domain/Port/UserInterface";

interface RegisterUserDto {
    name: string;
    lastName: string;
    cellphone: string;
    email: string;
    password: string;
}

export class RegisterUserUseCase {

    constructor(readonly repository:UserInterface) {}

    async run({ name, lastName, cellphone, email, password }: RegisterUserDto): Promise<User | any> {
        try {
            let contact = new Contact(name,lastName,cellphone);
            let credentials = new Credential(email,password);
            let status = new Status("",new Date);

            let user = new User(
                contact,
                credentials,
                status
            );

            return await this.repository.registerUser(user);

        }catch(error) {

        }
    }

}