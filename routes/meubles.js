const express = require('express');
const router = express.Router();

router.get('/api/meubles', (req, res) => {
    const { Meubles } = req.model;
    console.log(req.model.Meubles);
    Meubles.find({}, (err, docs) => {
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
// router.get('/api/meubles/tables-appoint', (req, res) => {
//     const { Meubles } = req.model;
//     Meubles.find({ category: `table de salon`}, (err, docs) => {
//         res.json(docs);
//     })
// })

module.exports = router;