
const dataCollection = require('../db').db().collection("data")
const caseStudySubmission = require('../db').db().collection("caseStudyLeads")
const validator = require('validator')

const dotenv = require('dotenv').config()

let Mailer = function(data) {
    this.data = data
    this.errors = []
}

Mailer.prototype.validate = function() {
    return new Promise((resolve, reject) => {
        if(this.data.name == "" ) {this.errors.push("You must provide a name.")}
        if(!validator.isEmail(this.data.email)) {this.errors.push("You must provide a valid email address.")}
        resolve()
    })
}

Mailer.prototype.cleanUp = function() {
    if(typeof(this.data.name) != "string") {this.data.name = ""}
    if(typeof(this.data.email) != "string") {this.data.email = ""}

    this.data = {
        name: this.data.name.trim().toLowerCase(),
        phone: this.data.full.trim().toLowerCase(),
        email: this.data.email.trim().toLowerCase(),
        message: this.data.message.trim()
    }
}

Mailer.prototype.CaseStudyEmailClenup = function() {
    if(typeof(this.data.email) != "string") {this.data.email = ""}
    this.data = {
        casestudy: this.data.casestudy,
        email: this.data.email.trim().toLowerCase()
    }
}

Mailer.prototype.register = function() {
    
    return new Promise(async (resolve, reject) => {
        this.validate()
        this.cleanUp()

        if(!this.errors.length) {
            let result = await dataCollection.insertOne(this.data)
            resolve(result)
        } else {
            reject(this.errors)
        }
        
    })
}

Mailer.findEmails = function() {
    return new Promise(async (resolve, reject) => {
        let emailData = await dataCollection.find().toArray()
        resolve(emailData)
    })
}

Mailer.prototype.sendRequest = function() {
    return new Promise(async(resolve, reject) => {
        this.validate()
        this.CaseStudyEmailClenup()

        if(!this.errors.length) {
            let response = await caseStudySubmission.insertOne(this.data)
            resolve(response)
        } else {
            reject(this.errrors)
        }
        
    })
}

Mailer.findCaseStudyEmails = function() {
    return new Promise(async(resolve, reject) => {
        let caseStudyData = await caseStudySubmission.find().toArray()
        resolve(caseStudyData)
    })
}

module.exports = Mailer