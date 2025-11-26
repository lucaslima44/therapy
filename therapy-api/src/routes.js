const express = require("express");
const routes = express.Router();

const AuthController = require("./controllers/AuthController");
const ProfissionalController = require("./controllers/ProfissionalController");

// Rota de teste
routes.get("/", (req, res) => res.send("API Therapy Online 🚀"));

//  Rotas de Autenticação (Cliente Normal)
routes.post("/auth/register", AuthController.register); // Cadastrar
routes.post("/auth/login", AuthController.login); // Entrar

//  Rotas de Profissionais (ProRegister)
routes.post("/profissionais", ProfissionalController.store);
routes.get("/profissionais", ProfissionalController.index);

module.exports = routes;
