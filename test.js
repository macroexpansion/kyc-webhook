const axios = require('axios')

const request_all_applicants = async () => {
    const res = await axios({
        // url: 'https://kyc.blockpass.org/kyc/1.0/connect/hosikyc_eab8b/applicants/waiting', // waiting | inreview | approved | resubmit
        url: 'https://kyc.blockpass.org/kyc/1.0/connect/hosikyc_eab8b/applicants',
        method: 'GET',
        headers: {
            Authorization: 'ce23b004881c7a3c030616f4f69f383a'
        }
    })

    console.log(res.data)
    console.log(res.data.data)
    // console.log(res.data.data.records[0].identities)
}

const request_single_applicants = async () => {
    const res = await axios({
        // url: 'https://kyc.blockpass.org/kyc/1.0/connect/hosikyc_eab8b/refId/1641976699421', // request with refId
        url: 'https://kyc.blockpass.org/kyc/1.0/connect/hosikyc_eab8b/recordId/61e00fcfc59cc40012554901', // request with recordId
        method: 'GET',
        headers: {
            Authorization: 'ce23b004881c7a3c030616f4f69f383a'
        }
    })

    console.log(res.data)
    const {value: email} = res.data.data.identities.email
    console.log(email)
}

const test_request = async () => {
    const created = {
        guid: '61e00fd04e6d1d00139880e6',
        status: 'waiting',
        clientId: 'hosikyc_eab8b',
        event: 'user.created',
        recordId: '61e00fcfc59cc40012554901',
        refId: '1642073220539',
        isPing: false,
        env: 'prod',
        webhookId: null
    }

    const approved = {
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
    }

    const res = await axios({
        url: 'http://localhost:7070/kyc',
        method: 'post',
        data: approved
    })

    if (res.data.success) {
        console.log(res.data.data)
    } else {
        console.log(res.data)
    }
}

!(async () => {
    // await request_all_applicants()
    // await request_single_applicants()
    await test_request()
})()
