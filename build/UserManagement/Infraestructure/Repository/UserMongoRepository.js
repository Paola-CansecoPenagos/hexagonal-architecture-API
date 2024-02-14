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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMongoRepository = void 0;
const mongo_1 = require("../../../Database/mongo");
class UserMongoRepository {
    registerUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db = (0, mongo_1.getMongoDB)();
                const result = yield db.collection('users').insertOne(user);
                return { _id: result.insertedId };
            }
            catch (error) {
                console.error('Error al registrar usuario en MongoDB:', error);
                throw error;
            }
        });
    }
    searchUserByToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db = (0, mongo_1.getMongoDB)();
                const user = yield db.collection('users').findOne({ token });
                return user;
            }
            catch (error) {
                console.error('Error al buscar usuario por token en MongoDB:', error);
                throw error;
            }
        });
    }
    updateUserVerifiedAt(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db = (0, mongo_1.getMongoDB)();
                const result = yield db.collection('users').updateOne({ uuid: user.uuid }, { $set: { verifiedAt: user.status.verifiedAt } });
                return result;
            }
            catch (error) {
                console.error('Error al actualizar usuario en MongoDB:', error);
                throw error;
            }
        });
    }
}
exports.UserMongoRepository = UserMongoRepository;
