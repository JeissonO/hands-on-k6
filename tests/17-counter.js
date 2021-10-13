/*
  my counter...........: 3   0/s
  i.e 1 + 2 = 3

  Real life example of Counter
*/

import { Counter } from 'k6/metrics'
var myCounter = new Counter('my counter')
import http from 'k6/http'
import { sleep } from 'k6'
import { check } from 'k6'

export default function () {
    //myCounter.add(1)
    //myCounter.add(2)
    myCounter.add(1)
    let response;
    for (var retries = 5; retries > 0; retries--) {
        response = http.get('https://run.mocky.io/v3/a2c6d59a-7211-47ec-8852-b004a72a3717') // Return 401
        //response = http.get('https://run.mocky.io/v3/cd6cd268-b4ad-42bc-a118-0d41ca3dcf66') // return 200
        
        console.log(`response status = ${response.status}`)
        if (response.status !== 200)
        {
            console.log(`response is not 200 so sleeping for 1 second . retry attempt = ${retries}`)
            myCounter.add(1)
            sleep(1)
        }
        else
        {
            retries = 0
        }
    }
    
    check(response, {
        'is status is 200: ': (r) => r.status === 200,
    })    
    // lets say you call API used in your peject 
    /*

    GET API = http://yourapiname/api/v4/getUsers
    Now this API may not provide you response within 1 second, it is bound to take time
    
    Requirement - Verify when above API retuns lets say 200
    So you decide to call above GET API
    if response.status != 200
    then wait for 1 second
    and call above GET API

    do this for MAX 5 time
    That is retry calling abobe GET API after every 1 seocnd for MAX 5 times till 
    you get status code as 200

    So here , you can add counter to find out max when it has returned 200 response


    lest check examplein next session

    */
}