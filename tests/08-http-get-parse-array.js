/*
Lets parse array
https://run.mocky.io/v3/b2ef378b-5f93-421e-8406-aba4f319578f

Returns below array
[
    {
        "name": "leanne graham",
        "email": "leanne@gmail.com",
        "job": "web developer",
        "location": "london"
    },
    {
        "name": "ervin howell",
        "email": "ervin@gmail.com",
        "job": "tech lead",
        "location": "london"
    },
    {
        "name": "clementine bauch",
        "email": "clementine@gmail.com",
        "job": "web developer",
        "location": "liverpool"
    },
    {
        "name": "chelsey dietrich",
        "email": "chelsey@gmail.com",
        "job": "baker",
        "location": "london"
    },
    {
        "name": "dennis schulist",
        "email": "dennis@gmail.com",
        "job": "pen tester",
        "location": "manchester"
    }
]
*/

import http from 'k6/http'

export default function () {
  let response = http.get('https://run.mocky.io/v3/cd6cd268-b4ad-42bc-a118-0d41ca3dcf66')

  //Lets red response array

  let body = JSON.parse(response.body)
  body.forEach(element => {
    console.log(`name is ${element.name}`)
  }); 
  // This is how you can parse array
}