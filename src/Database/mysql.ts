import mysql from 'mysql2/promise'; 

const pool = mysql.createPool({
    host: 'localhost',
    user: 'usuario',
    password: 'contraseña',
    database: 'nombre_base_de_datos'
});

export default pool;
