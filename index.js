const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(bodyParser.text())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/kyc', (req, res) => {
    console.log(req.body)
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
