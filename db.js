const dotenv = require('dotenv').config()
const { MongoClient } = require('mongodb')
const client = new MongoClient(process.env.CONNECTIONSTRING)

async function start() {
    await client.connect()
    module.exports = client
    console.log("db conntected")
    const app = require('./server')
    app.listen(process.env.PORT, "192.168.1.3" || "localhost" ,() => {
        console.log(`Listening to request on http://localhost:${process.env.PORT}`)
    })
}

start()