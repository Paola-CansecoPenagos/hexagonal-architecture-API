import pool from '../../../Database/mysql';

import { User } from "../../Domain/Entity/User";
import { UserInterface } from "../../Domain/Port/UserInterface";

export class UserMysqlRepository implements UserInterface {
    async registerUser(user: User): Promise<any> {
        const connection = await pool.getConnection();
        try {
            const query = 'INSERT INTO users (uuid, contact_name, contact_last_name, contact_cellphone, email, password, status_token, status_verifiedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            const values = [user.uuid, user.contact.name, user.contact.lastName, user.contact.cellphone, user.credentials.email, user.credentials.password, user.status.token, user.status.verifiedAt];
            const [rows] = await connection.query(query, values);
            return rows;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error al registrar usuario en la base de datos: ${error.message}`);
            } else {
                throw new Error('Error al registrar usuario en la base de datos');
            }
        } finally {
            connection.release();
        }
    }

    async searchUserByToken(token: string): Promise<User | any> {
        throw new Error(`Funcionalidad no implementada`);
    }

    async updateUserVerifiedAt(user: User): Promise<any> {
        const connection = await pool.getConnection();
        try {
            const query = 'UPDATE users SET status_verifiedAt = ? WHERE uuid = ?';
            const values = [user.status.verifiedAt, user.uuid];
            const [rows] = await connection.query(query, values);
            return rows;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error al actualizar fecha de verificación de usuario en la base de datos: ${error.message}`);
            } else {
                throw new Error('Error al actualizar fecha de verificación de usuario en la base de datos');
            }
        } finally {
            connection.release();
        }
    }
}
