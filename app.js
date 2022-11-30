const express = require('express');
const homeRoutes = require('./src/routes/homeRoutes');

const app = express();
const port = 3000;



app.use(homeRoutes);


app.listen(port, console.log(`sevidor esta rodando na porta ${port}`));