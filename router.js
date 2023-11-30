const express =require('express')
const emailController = require('./controllers/emailController')
const router = express.Router()

function passwordProtected(req, res, next) {
    res.set("WWW-Authenticate", "Basic realm ='makearsiteejs")
    if (req.headers.authorization == "Basic YWRtaW46cXdlcnR5cXdlcnR5ODk=") {
        next()
    } else {
        console.log(req.headers.authorization)
        res.status(401).send("Try again")
    }
}

//home route
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/why-makear', (req, res) => {
    res.render('why-makear.ejs')
})

router.get('/our-work', (req, res) => {
    res.render('our-work')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})

router.get('/view-email-address', passwordProtected, (req, res) => {
    res.render('email-list')
})

router.post('/send-email', emailController.sendEmailToOutlook)
router.post('/view-emails', emailController.viewEmailAddress)
router.post('/view-case-study', emailController.requestCaseStudy)
router.post('/view-case-study-email-address', emailController.viewSubmittedCaseStudy)

module.exports = router