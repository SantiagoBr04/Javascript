module.exports = {

    produtos: (req, res) => {
        res.sendfile('produtos.html', { root: 'views' });  
    },

    camisetas: (req, res) => {
        res.sendfile('camisetas.html', { root: 'views' });
    }
};