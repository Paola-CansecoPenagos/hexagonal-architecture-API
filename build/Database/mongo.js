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
exports.getMongoDB = exports.connectToMongoDB = void 0;
const mongodb_1 = require("mongodb");
const mongoURI = 'mongodb://localhost:27017/';
let db;
function connectToMongoDB(databaseName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const client = yield mongodb_1.MongoClient.connect(mongoURI);
            db = client.db(databaseName);
            console.log('Conexión a MongoDB establecida');
        }
        catch (error) {
            console.error('Error de conexión a MongoDB:', error);
            throw error;
        }
    });
}
exports.connectToMongoDB = connectToMongoDB;
function getMongoDB() {
    if (!db) {
        throw new Error('No hay conexión a MongoDB establecida');
    }
    return db;
}
exports.getMongoDB = getMongoDB;
