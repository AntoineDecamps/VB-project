const express = require('express');
const router = express.Router();

router.get('/api/decorations', (req, res) => {
    const { Decorations } = req.model;
    Decorations.find({}, (err, docs) => {
        console.log(docs);
        res.json(docs);
    })
});

module.exports = router;