"use strict";
//TODO: SERVIDOR
//TODO: RUTAS
//TODO: INICIALIZAR SERVIDOR
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRoute_1 = __importDefault(require("./UserManagement/Infraestructure/Route/UserRoute"));
const app = (0, express_1.default)();
//let userRoute = null;
app.use('api/v1/users', UserRoute_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
