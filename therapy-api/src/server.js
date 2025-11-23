const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes"); // Chama o arquivo de rotas
require("dotenv").config(); // Lê o arquivo .env

const app = express();

// Configurações básicas
app.use(cors()); // Permite que o App (React Native) converse com a API
app.use(express.json()); // Permite que a API entenda dados em formato JSON

// Conexão com o Banco de Dados (MongoDB Atlas)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado ao MongoDB Atlas!"))
  .catch((err) => console.error("❌ Erro ao conectar no MongoDB:", err));

// Usa as rotas que definimos
app.use(routes);

// Inicia o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});