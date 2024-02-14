import { User } from "../Entity/User";

export interface UserInterface {
    registerUser(user:User):Promise<User|any>;
    searchUserByToken(token:string):Promise<User|any>;
    updateUserVerifiedAt(user:User):Promise<User|any>;
}