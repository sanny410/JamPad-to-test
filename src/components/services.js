const postData = async function (url, data) {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            'Accept': 'application/json',
            "Cookie": "session=abcdefghijklmnopqrstu"
        },
        body: JSON.stringify(data)
    })
    return res.json()
}

const getData = async function (url) {
    const res = await fetch(url, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImhyQGdtYWlsLmNvbSIsImV4cCI6MTY1MjY0MjY4OX0.EAEH8rKIiwEcOTin2entjDDa6dHh6JHsqqhWeO24kZ8'
        },
    })
    return res.json()
}






export {getData, postData}
