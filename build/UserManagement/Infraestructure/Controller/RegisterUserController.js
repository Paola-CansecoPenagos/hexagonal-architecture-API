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
exports.RegisterUserController = void 0;
class RegisterUserController {
    constructor(registerUserUseCase) {
        this.registerUserUseCase = registerUserUseCase;
    }
    run(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //TODO: INSTALAR EXPRESS Y EXPRRESS PARA TYPESCRIPT
                let user = yield this.registerUserUseCase.run(req.body);
                this.emailService.run(user);
                return res.status(201).json(user);
            }
            catch (error) {
                return res.status((_a = error.http_status) !== null && _a !== void 0 ? _a : 500).json(error.getMessage());
            }
        });
    }
}
exports.RegisterUserController = RegisterUserController;
