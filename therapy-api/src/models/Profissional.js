const mongoose = require("mongoose");

const ProfissionalSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  datadenascimento: { type: String, required: true },
  genero: { type: String, required: true },
  area: { type: String, required: true },
  numerocrp: { type: String, required: true, unique: true },
  status: { type: String, default: "em_analise" },
});

module.exports = mongoose.model("Profissional", ProfissionalSchema, "profissionals");
