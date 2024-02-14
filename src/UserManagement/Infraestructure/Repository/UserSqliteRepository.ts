import { User } from "../../Domain/Entity/User";
import { UserInterface } from "../../Domain/Port/UserInterface";

export class UserSqliteRepository implements UserInterface {
    registerUser(user: User): Promise<any> {
        throw new Error("Method not implemented.");
    }
    searchUserByToken(token: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    updateUserVerifiedAt(user: User): Promise<any> {
        throw new Error("Method not implemented.");
    }

}