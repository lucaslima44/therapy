const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com MongoDB Atlas

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado ao MongoDB Atlas!"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

// Schema e Model
const ProfissionalSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  datadenascimento: { type: String, required: true },
  genero: { type: String, required: true },
  area: { type: String, required: true },
  numerocrp: { type: String, required: true, unique: true },
});

const Profissional = mongoose.model("Profissional", ProfissionalSchema);

// Rotas
app.post("/profissionais", async (req, res) => {
  try {
    const novo = new Profissional(req.body);
    await novo.save();
    res.status(201).json(novo);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

app.get("/profissionais", async (req, res) => {
  const lista = await Profissional.find();
  res.json(lista);
});

app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log(" Servidor iniciado na porta", process.env.PORT);
});
