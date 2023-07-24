const express = require("express");
const cors = require ("cors");

const dbConnection = require('../database/database')


class Server{
    constructor() {
        
            this.app = express();
            this.port = process.env.PORT;
            this.usuariosPath = "/api/usuarios";

    //Middlewares
    this.middlewares();

    //Rutas de mi aplicación
    this.routes();

    //ejecucion base de datos 
    this.conectarDB();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());

        this.app.use(express.json());

        this.app.use(express.static("public"));
    }

    routes() {
        this.app.use(this.usuariosPath, require("../routes/usuarios"));
        
      }
    
      listen() {
        this.app.listen(this.port, () => {
          console.log("Servidor corriendo en puerto", this.port);
        });
      }
    }
    
    module.exports = Server;
