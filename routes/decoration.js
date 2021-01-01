const express = require('express');
const router = express.Router();

router.get('/api/decoration/:id', (req, res) => {
    const { id } = req.params;
    const { Decorations } = req.model;
    // const {
    //     params : {id},
    //     model : {Meubles}
    // } = req;
    Decorations.findById(id,(err, luminaire) => {
        res.json(luminaire);
    });
});

router.post('/api/decoration', (req, res) => {
    const { 
        body : decorationJson,
        model : { Decorations }
    } = req;
    const decoration = new Decorations(decorationJson);
    decoration.save((err) => {
        console.error(err);
        res.send('OK');
    });
});

router.patch('/api/decoration/:id', (req, res) => {
    const {
        body : decorationJson,
        model: {Decorations},
        params: {id}
    } = req;
    Decorations.findByIdAndUpdate(id, decorationJson, () => {
        res.send('ok')
        res.json(decorationJson);
        //! Check ici l'intérêt d'avoir le Json modifié en réponse : je ne vois pas trop :/
    });
});

router.delete('/api/decoration/:id', (req, res) => {
    const {
        params: {id},
        model : {Decorations}
    } = req;
    Decorations.findByIdAndDelete(id, (err) => {
        res.send('delete completed');
    });
})

module.exports = router; 