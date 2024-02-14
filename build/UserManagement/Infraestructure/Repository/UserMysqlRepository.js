"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMysqlRepository = void 0;
const mysql_1 = __importDefault(require("../../../Database/mysql"));
class UserMysqlRepository {
    registerUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield mysql_1.default.getConnection();
            try {
                const query = 'INSERT INTO users (uuid, contact_name, contact_last_name, contact_cellphone, email, password, status_token, status_verifiedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
                const values = [user.uuid, user.contact.name, user.contact.lastName, user.contact.cellphone, user.credentials.email, user.credentials.password, user.status.token, user.status.verifiedAt];
                const [rows] = yield connection.query(query, values);
                return rows;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Error al registrar usuario en la base de datos: ${error.message}`);
                }
                else {
                    throw new Error('Error al registrar usuario en la base de datos');
                }
            }
            finally {
                connection.release();
            }
        });
    }
    searchUserByToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error(`Funcionalidad no implementada`);
        });
    }
    updateUserVerifiedAt(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield mysql_1.default.getConnection();
            try {
                const query = 'UPDATE users SET status_verifiedAt = ? WHERE uuid = ?';
                const values = [user.status.verifiedAt, user.uuid];
                const [rows] = yield connection.query(query, values);
                return rows;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Error al actualizar fecha de verificación de usuario en la base de datos: ${error.message}`);
                }
                else {
                    throw new Error('Error al actualizar fecha de verificación de usuario en la base de datos');
                }
            }
            finally {
                connection.release();
            }
        });
    }
}
exports.UserMysqlRepository = UserMysqlRepository;
