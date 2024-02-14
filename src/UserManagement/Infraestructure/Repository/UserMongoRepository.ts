import { getMongoDB } from '../../../Database/mongo'; 
import { User } from "../../Domain/Entity/User";
import { UserInterface } from "../../Domain/Port/UserInterface";

export class UserMongoRepository implements UserInterface {
    async registerUser(user: User): Promise<any> {
        try {
            const db = getMongoDB();
        const result = await db.collection('users').insertOne(user);
        return { _id: result.insertedId };
        } catch (error) {
            console.error('Error al registrar usuario en MongoDB:', error);
            throw error;
        }
    }

    async searchUserByToken(token: string): Promise<any> {
        try {
            const db = getMongoDB();
            const user = await db.collection('users').findOne({ token });
            return user;
        } catch (error) {
            console.error('Error al buscar usuario por token en MongoDB:', error);
            throw error;
        }
    }

    async updateUserVerifiedAt(user: User): Promise<any> {
        try {
            const db = getMongoDB();
            const result = await db.collection('users').updateOne({ uuid: user.uuid }, { $set: { verifiedAt: user.status.verifiedAt } });
            return result;
        } catch (error) {
            console.error('Error al actualizar usuario en MongoDB:', error);
            throw error;
        }
    }
}
