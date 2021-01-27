const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/contact', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'VBcreation.contact@gmail.com',
            pass: 'vbcreation',
        }
    })
    const mailOptions = {
        from: req.body.email,
        to: 'antoine.decamps7@gmail.com',
        subject: `Message venant de ${req.body.email}: ${req.body.subject}`,
        text: req.body.message,
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            res.send('erreur');
        } else {
            res.send('Success');
        }
    })
});
module.exports = router;