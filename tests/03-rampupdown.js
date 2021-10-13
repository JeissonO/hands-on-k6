import http from 'k6/http'

// Rampup and Ramp down users
export let options = {
    stages: [
        { duration: '5s', target: 5 }, // 5 users for 5 secodns
        { duration: '10s', target: 3 }, // again 3 users for 10 seconds,
        { duration: '10s', target: 1 } // again 3 users for 10 seconds
    ],
    vus: 10
    //duration: "1m3s" // k6 run name of the spec file
}
// Main function, VU will call endpoint 
export default function () {
    http.get('https://www.google.com')
    //http.get('https://www.wikipedia.com')
}

// Total durarion 30 seconds, internally rampup is happedning as specified

// DONE !

// k6 run --vus 10 [name of spec file]