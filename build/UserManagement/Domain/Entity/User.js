"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
//TODO: VALIDATIONS CON DECORADORES
class User {
    constructor(contact, credentials, status) {
        this.uuid = this.generateUuid();
        this.contact = contact;
        this.credentials = credentials;
        this.status = status;
    }
    generateUuid() {
        return "";
    }
}
exports.User = User;
