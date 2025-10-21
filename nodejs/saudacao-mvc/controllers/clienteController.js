const loginModel = require('../models/loginModel');

module.exports = {

    clientes: (req, res) => {
        res.sendfile('clientes.html', { root: 'views' });  
    },

    login: (req, res) => {
        res.sendfile('login.html', { root: 'views' });  
    },

    confirmacao: (req, res) => {
        const { nome, idade, favorita } = req.body;
        const mensagem = loginModel.gerarMensagemPersonalizada(nome, idade, favorita);
        res.send(`<h1>${mensagem}</h1>`);
    }
};