const express = require('express');
const router = express.Router();

router.get('/api/luminaires', (req, res) => {
    const { Luminaires } = req.model;
    Luminaires.find({}, (err, docs) => {
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