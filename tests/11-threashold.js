/*
Threashod define pass/fail critera for tests

EXAMPLE
System does not produe more than 1% of errors
Response time for 95% of APIs/ requests shoudl be below 200 milisecond
Resonse time for 99% of requests should be below 400 milisecodns

Lets code !

So, threashold analyse performance metrics defined above
determine final tets reult
mar tets as pass/fail

*/

import http from 'k6/http'
import {Rate} from 'k6/metrics'

// Declare Rate
const failureRate = new Rate('http_req_failed')

// failed requests............: 0.00%  ✓ 0   ✗ 1 --  NO FAILURE 
// All below req satisfied
export let options = {
    thresholds: {
      // 90% of requests must finish within 400ms.
      http_req_failed: ['rate<0.01'],  
      http_req_duration: ['p(95) < 180', 'p(99) < 300' ],
    },
  };

export default function(){
    let res = http.get('https://run.mocky.io/v3/983af971-096a-4108-b262-d13ce7f46f47') // this api retuns 200, so we checked for 200 response code

    // Apply threasholdss
    failureRate.add(res.status !== 200) // if respone is not 200, then fail

    // Lets execute with multipel uer

    // no such URL exists - lest try another one

    // actually i am disconncted from internet so URL errr lest try again

   // so use --http-debug=full to get all the logs from API calls
}

