const express = require('express');
const router = express.Router();

router.get('/api/luminaires', (req, res) => {
    const { Luminaires } = req.model;
    Luminaires.find({}, (err, docs) => {
        console.log(docs);
        res.json(docs);
    })
});

module.exports = router;