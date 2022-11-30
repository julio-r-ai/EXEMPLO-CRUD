const HomeController = {
    showHome: (req, res) =>{
        res.send('Pagina inicial');
    },

    showContato: (req, res) => {
        res.send('Pagina contato');
    },

    showLogin: (req, res) =>{
        res.send('Pagina login');
    },

    showCadastro: (req, res) => {
        res.send('Pagina cadastro');
    }
}

module.exports = HomeController;