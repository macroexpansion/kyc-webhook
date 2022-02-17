const express = require('express')
const app = express()
const port = 5001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.raw())
app.use(express.text())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    /* {
      guid: '61e00fd04e6d1d00139880e6',
      status: 'waiting',
      clientId: 'hosikyc_eab8b',
      event: 'user.created',
      recordId: '61e00fcfc59cc40012554901',
      refId: '1642073220539',
      isPing: false,
      env: 'prod',
      webhookId: null
    } */

    /* {       
      guid: '61e01d580d30010013982c4e',
      status: 'approved',
      clientId: 'hosikyc_eab8b',
      event: 'review.approved',
      recordId: '61e00fcfc59cc40012554901',
      refId: '1642073220539',
      submitCount: 1,
      blockPassID: '61e00d42db23090011ed717d',
      isArchived: false,
      inreviewDate: '2022-01-13T12:38:37.536Z',
      waitingDate: '2022-01-13T11:41:04.699Z',
      approvedDate: '2022-01-13T12:38:48.210Z',
      isPing: false,
      env: 'prod',
      webhookId: null
    } */

    console.log(req.body)
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
