//TODO: SERVIDOR
//TODO: RUTAS
//TODO: INICIALIZAR SERVIDOR

import express from 'express';
import userRoute from './UserManagement/Infraestructure/Route/UserRoute';
const app = express();
//let userRoute = null;

app.use('api/v1/users',userRoute);
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });