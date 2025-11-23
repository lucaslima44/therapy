const User = require('../models/User');
// const bcrypt = require('bcryptjs'); 

module.exports = {
  async register(req, res) {
    const { email } = req.body;
    try {
      if (await User.findOne({ email }))
        // No cadastro, geralmente avisamos se já existe, mas você pode mudar se quiser
        return res.status(400).json({ error: 'Email já cadastrado' });

      const user = await User.create(req.body);
      user.password = undefined;
      return res.status(201).json({ user });
    } catch (err) {
      return res.status(400).json({ error: 'Falha no registro' });
    }
  },

  async login(req, res) {
    const { email, password } = req.body;
    
    // Definimos a mensagem padrão aqui para usar em todos os erros de credencial
    const mensagemErro = 'Email ou senha incorretos ou inexistentes, tente novamente.';

    try {
      // Busca o usuário e a senha
      const user = await User.findOne({ email }).select('+password');

      // 1. Se NÃO achou o usuário -> Retorna a mensagem genérica
      if (!user) {
        return res.status(400).json({ error: mensagemErro });
      }

      // 2. Se a senha NÃO bate -> Retorna a MESMA mensagem genérica
      if (password !== user.password) {
        return res.status(400).json({ error: mensagemErro });
      }

      // Sucesso
      user.password = undefined;
      res.send({ user }); 
      
    } catch (err) {
      console.error(err);
      // Erro de servidor (banco caiu, etc)
      res.status(500).json({ error: 'Erro interno ao realizar login.' });
    }
  }
};