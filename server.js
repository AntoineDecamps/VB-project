const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbMiddleware = require('./middlewares/mongodb.js');
const meublesRouter = require('./routes/meubles.js');
const meubleRouter = require('./routes/meuble.js');
const luminairesRouter = require('./routes/luminaires.js');
const luminaireRouter = require('./routes/luminaire.js');
const decorationsRouter = require('./routes/decorations.js');
const decorationRouter = require('./routes/decoration.js');

const app = express();
const port = 5050;

app.use(bodyParser.json());
app.use(dbMiddleware);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(meublesRouter);
app.use(meubleRouter);
app.use(luminairesRouter);
app.use(luminaireRouter);
app.use(decorationsRouter);
app.use(decorationRouter);


app.listen(port, () => {
    console.log(`Server connecté sur le port localhost://${port}`);
})
