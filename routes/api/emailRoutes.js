const router = require("express").Router();
// const passport = require("../../config/passport");
// const db = require("../../models");
// const authMiddleware = require("../../config/middleware/authMiddleware");
// const emailController = require("../../controller/emailController");

router.post(
    "/send-email", (req, res) => {
    console.log(req, res)
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name ${req.body.name}</li>
            <li>Email ${req.body.email}</li>
        </ul>
        <h3> Message </h3>
        <p>${req.body.message}</p>
        `

        let transporter = nodeMailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: "janae45@ethereal.email",
                pass: 'nGzhK8wMfKRZs55Ceg'
            }
        })
        let mailOptions = {
            from: "janae45@ethereal.email",  // sender address
            to: req.body.to, // list of receivers
            subject: req.body.subject, // Subject line
            text: "New Test Message",//req.body.message, // plain text body
            html: htmlEmail // html body
        };
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err);
            }
            console.log('Message sent: %s', info.message)
            console.log("Message URL: %s", nodeMailer.getTestMessageUrl(info))

        })
    })

})
// router.post(emailController.sendEmail);

module.exports = router;