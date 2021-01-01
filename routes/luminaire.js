const express = require('express');
const router = express.Router();

router.get('/api/luminaire/:id', (req, res) => {
    const { id } = req.params;
    const { Luminaires } = req.model;
    // const {
    //     params : {id},
    //     model : {Meubles}
    // } = req;
    Luminaires.findById(id,(err, luminaire) => {
        res.json(luminaire);
    });
});

router.post('/api/luminaire', (req, res) => {
    const { 
        body : luminaireJson,
        model : { Luminaires }
    } = req;
    const luminaire = new Luminaires(luminaireJson);
    luminaire.save((err) => {
        console.error(err);
        res.send('OK');
    });
});

router.patch('/api/luminaire/:id', (req, res) => {
    const {
        body : luminaireJson,
        model: {Luminaires},
        params: {id}
    } = req;
    Luminaires.findByIdAndUpdate(id, luminaireJson, () => {
        // res.send('ok')
        res.json(luminaireJson);
        //! Check ici l'intérêt d'avoir le Json modifié en réponse : je ne vois pas trop :/
    });
});

router.delete('/api/luminaire/:id', (req, res) => {
    const {
        params: {id},
        model : {Luminaires}
    } = req;
    Luminaires.findByIdAndDelete(id, (err) => {
        res.send('delete completed');
    });
})

module.exports = router;