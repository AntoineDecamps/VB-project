const express = require('express');
const router = express.Router();

router.get('/api/decorations', (req, res) => {
    const { Decorations } = req.model;
    Decorations.find({}, (err, docs) => {
        const filteredResults = docs.map((elem) => {
            const objElem = elem.toObject();
            return ({
                ...objElem,
                id: objElem._id
            })
        });
        console.log(docs);
        res.json(filteredResults);
    })
});

module.exports = router;