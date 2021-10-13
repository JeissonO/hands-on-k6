/*
Parse HTTP Response
Lets create mock API

HTTP API is - https://run.mocky.io/v3/8285c1bb-5d50-481e-bdc0-4115bebcfb9e
HTTP HEADER is content-type application/json
Retruns Resonse
{
  "statusDesc" : "Successfull",
  "statusCode" : 200,
  "serverStatusDesc" : "Successfull Petition"
}

*/

import http from 'k6/http'
import { check } from 'k6'

export default function () {
    var url = 'https://run.mocky.io/v3/c8940c0c-569c-43b0-82fd-31954c273c8f'

    var headerParam = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = http.get(url, headerParam)

    check(response, {
        'is status is 200: ': (r) => r.status === 200,
    })    

    // it is JSON
    let body = JSON.parse(response.body)

    //Print
    console.log(`respone body is ${JSON.stringify(body)}`)
    console.log(`statusDesc is ${body.statusDesc}`)

    // So now , you can parse JSOn response and return value of anything to other APIs
    // this is hwo you an red response, parse and pass to other APIS or decide if tets is passed or fail based upon response
    // Lets check this message inside check()

    check(response, {
        'is statusDesc Successfull: ': (r) => JSON.parse(r.body).statusDesc === "Successfull",
    })

    // This is how you can check JSON Body

}