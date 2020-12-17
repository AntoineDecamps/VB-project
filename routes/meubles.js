const express = require('express');
const router = express.Router();

router.get('/api/meubles', (req, res) => {
    const { Meubles } = req.model;
    console.log(req.model.Meubles);
    Meubles.find({}, (err, docs) => {
        console.log(docs);
        res.json(docs);
    })
});

module.exports = router;