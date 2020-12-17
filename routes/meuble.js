const express = require('express');
const router = express.Router();

router.get('/api/meuble/:id', (req, res) => {
    const { id } = req.params;
    const { Meubles } = req.model;
    // const {
    //     params : {id},
    //     model : {Meubles}
    // } = req;
    Meubles.findById(id,(err, meuble) => {
        res.json(meuble);
    });
});

router.post('/api/meuble', (req, res) => {
    const { 
        body : meubleJson,
        model : { Meubles }
    } = req;
    const meuble = new Meubles(meubleJson);
    meuble.save((err) => {
        console.error(err);
        res.send('OK');
    });
});

router.patch('/api/meuble/:id', (req, res) => {
    const {
        body : meubleJson,
        model: {Meubles},
        params: {id}
    } = req;
    Meubles.findByIdAndUpdate(id, meubleJson, () => {
        // res.send('ok')
        res.json(meubleJson);
        //! Check ici l'intérêt d'avoir le Json modifié en réponse : je ne vois pas trop :/
    });
});

router.delete('/api/meuble/:id', (req, res) => {
    const {
        params: {id},
        model : {Meubles}
    } = req;
    Meubles.findByIdAndDelete(id, (err) => {
        res.send('delete completed');
    });
})

module.exports = router;