const Mailer = require('../models/Mailer')

exports.sendEmailToOutlook = function(req, res) {
    let mailer = new Mailer(req.body)
    mailer.sendEmailsExpress()
    // mailer.register().then((result) => {
    //     req.flash("success", "We have received your message, will reach you soon.")
    //     req.session.save(function() {
    //         res.render('contact', {success: req.flash('success')})
    //     })  
    // }).catch((err) => {
    //     res.send(err)
    // })
}

exports.viewEmailAddress = function(req, res) {
    Mailer.findEmails().then((result) => {
        res.render('email-list', {data: result})
    }).catch((err) => {
        res.send(err)
    })
}

exports.requestCaseStudy = function(req, res) {
    let mailer = new Mailer(req.body)
    mailer.sendRequest().then(() => {
        req.flash("success", "We will share the case study on your email.")
        req.session.save(function() {
            res.render('why-makear', {success: req.flash('success')})
        })
    }).catch((err) => {
        req.flash("errors", "Try again later")
        req.session.save(function() {
            res.render("why-makear", {errors: req.flash('errors')})
        })
        res.send("something wrong happened.")
    })
}

exports.viewSubmittedCaseStudy = function(req, res) {
    Mailer.findCaseStudyEmails().then((result) => {
        res.render('email-list', {caseStudyData: result})
    }).catch((err) => {
        req.flash("errors", "Something went wrong please try again later")
        req.session.save(function() {
            res.render('email-list', {errors: req.flash('errors')})
        })
    })
}