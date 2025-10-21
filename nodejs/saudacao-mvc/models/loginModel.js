module.exports = {
  gerarMensagemPersonalizada: (email, login, batata) => {
    let email1 = "Santiago@email.com"
    let senha1 = "12345"

    if email = email1 && login = senha1 {
        faixaEtaria = "usuário autenticado"
    } else {
        faixaEtaria = "usuário não autenticado"
    }

    return `Olá, ${nome}! Você tem ${idade}, Você é um(a) ${faixaEtaria}. 
    Sua coisa favorita é ${favorita}, bem-vindo ao sistema de login!`;
  }
};
