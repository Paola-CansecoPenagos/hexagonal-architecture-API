import express from 'express'; 
import { registerUserController, activateUserController } from "../dependencies";
const router = express.Router();
const userController = new UserController(/* ... */);
import { authenticateJWT } from '../Middleware/AuthMiddleware';

//TODO:RUTAS PARA CREAR UN USUARIO
router.post("/",registerUserController.run.bind(registerUserController));
router.post('/login', (req, res) => userController.login(req, res));
router.put("/:activationToken/activate", (req, res) => activateUserController.run(req, res));
router.get('/protected', authenticateJWT, (req, res) => {
    res.json({ message: "Contenido protegido" });
});


export default router;