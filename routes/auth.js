const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../model/user.js');

router.post('/api/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })
        user.save((err) => {
            res.send("OK")
        })
    } catch {
        res.status(500).send("Erreur");
    }
});

router.post('/api/login', async (req, res) => {
    const {
        body: user,
        model: { Users }
    } = req;
    await Users.find({email: user.email})
        .then((response) => {
            if (response[0] === undefined) {
                return res.status(400).send("utilisateur non trouvé");
            } else {
                if (bcrypt.compare(req.body.password, response[0].password)) {
                    res.json(response[0]);
                } else {
                    res.send("Not allowed");
                }
            }
        })
});
module.exports = router;
    
    // if (await Users.find({email: user.email}) !== null) {
    //     res.send(user)
    // } else {
    //     res.send('not found');
    // };
    // const response = Users.findOne({email: user.email}).exec().then((response) => response)
    // console.log(response);
    // console.log(test);
    // if (user === null) {
    //     return res.status(400).send("utilisateur non trouvé");
    // }
//     try {
//         if (await bcrypt.compare(req.body.password, connectedUser.password)) {
//             res.send('Success');
//         } else {
//             res.send("Not allowed");
//         }
//     } catch {
//         res.status(500).send();
//     }
// })

