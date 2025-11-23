const express = require('express');
const routes = express.Router();

// --- VOCÊ PRECISA DESSAS DUAS LINHAS ABAIXO ---
const AuthController = require('./controllers/AuthController'); 
const ProfissionalController = require('./controllers/ProfissionalController'); 

// Rota de teste (opcional)
routes.get('/', (req, res) => res.send('API Therapy Online 🚀'));

// --- Rotas de Autenticação (Cliente Normal) ---
routes.post('/auth/register', AuthController.register); // Cadastrar
routes.post('/auth/login', AuthController.login);       // Entrar

// --- Rotas de Profissionais (Seu ProRegister) ---
routes.post('/profissionais', ProfissionalController.store);
routes.get('/profissionais', ProfissionalController.index);

module.exports = routes;