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
exports.RegisterUserUseCase = void 0;
const Contact_1 = require("../../Domain/Entity/Contact");
const Credential_1 = require("../../Domain/Entity/Credential");
const Status_1 = require("../../Domain/Entity/Status");
const User_1 = require("../../Domain/Entity/User");
//TODO: IMPLEMENTACIÓN DE GENERACIÓN DE TOKEN
//TODO: IMPLEMENTACIÓN DE VALIDACIONES
class RegisterUserUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    run({ name, lastName, cellphone, email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let contact = new Contact_1.Contact(name, lastName, cellphone);
                let credentials = new Credential_1.Credential(email, password);
                let status = new Status_1.Status("", new Date);
                let user = new User_1.User(contact, credentials, status);
                return yield this.repository.registerUser(user);
            }
            catch (error) {
            }
        });
    }
}
exports.RegisterUserUseCase = RegisterUserUseCase;
