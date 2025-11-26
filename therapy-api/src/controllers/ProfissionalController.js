const Profissional = require('../models/Profissional');

module.exports = {
  // Função para Cadastrar (Store)
  async store(req, res) {
    console.log("Recebendo novo profissional:", req.body);

    try {
      // Tenta criar no banco de dados
      const profissional = await Profissional.create(req.body);

      // Se der certo, retorna status 201 (Criado) e os dados
      return res.status(201).json(profissional);

    } catch (err) {
      console.error("Erro ao salvar:", err);

      // O código 11000 é o código do Mongo para "Duplicidade" (Unique)
      if (err.code === 11000) {
        return res.status(400).json({ 
          erro: 'Já existe um cadastro com este CPF, Email ou CRP.' 
        });
      }

      // Outros erros genéricos
      return res.status(400).json({ 
        erro: 'Erro ao cadastrar profissional. Verifique os dados enviadas.' 
      });
    }
  },

  async index(req, res) {
    try {
      const profissionais = await Profissional.find();
      return res.json(profissionais);
    } catch (err) {
      return res.status(400).json({ erro: 'Erro ao buscar lista.' });
    }
  }
};