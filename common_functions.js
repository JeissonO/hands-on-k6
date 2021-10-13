// Common reusable function

export let failureRate= new Counter("errors");
 
export function checkStatus(response, vu, iter, httpCode) {
 
    const success = check(response, {
        "Status: OK": (response) => response.status === httpCode,
    });
 
    // You can use setResponseCallback if required
     http.setResponseCallback(http.expectedStatuses(httpCode));
 
// Fail the iteration. Log the error message
    if (!success) { 
        fail(`VU: ${vu}  ITER: ${iter} (${httpCode}) - ${response.request.url} - Checks Failed: ${response.request.url} - Expected: ${httpCode} - - Actual: ${response.status}`);
        failureRate.add(1, {
            url: response.request.url,
            httpCode: httpCode
        });
    };
 
    // Sleep after each check
    sleep(`${__ENV.SLEEP}`);
 
}



// Set cookieJar

const jar = http.cookieJar();
jar.set("https://auth.abc.xyz", "stateToken", stateToken); //stateToken fetched from Auth Request


/// Read Specific Cookie

let ssoCookie = JSON.stringify(res.request.cookies[`sso`]); //read sso cookie from previous response
let regex = /{'authToken':'(\S+?)'}/;
let authToken = ssoCookie.match(regex)[0];