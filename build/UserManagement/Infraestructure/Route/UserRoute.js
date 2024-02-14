"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("../dependencies");
const router = express_1.default.Router();
//TODO:RUTAS PARA CREAR UN USUARIO
router.post("/", dependencies_1.registerUserController.run.bind(dependencies_1.registerUserController));
router.put("/:token/activate");
exports.default = router;
