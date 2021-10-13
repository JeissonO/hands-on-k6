// Auto-generated by the postman-to-k6 converter

import "./libs/shim/core.js";
import "./libs/shim/urijs.js";

export let options = { maxRedirects: 4 };

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options,
  environment: {
    courseURL: "http://127.0.0.1:83/webservice/rest/server.php",
    courseId: "15"
  }
});

export default function() {
  postman[Request]({
    name: "CREATE COURSE",
    id: "3cf8998e-fa74-4adf-8295-7a1c1cbc20f5",
    method: "POST",
    address:
      "{{courseURL}}?wstoken=585a5e34abe199537fec2640b8252ef7&moodlewsrestformat=json&wsfunction=core_course_create_courses&courses[0][fullname]=mycourses&courses[0][shortname]=mycourses123&courses[0][categoryid]=1&courses[0][visible]=1&courses[0][summary]=text&courses[0][enablecompletion]=0&courses[0][summaryformat]=1&courses[0][format]=topics&courses[0][numsections]=0",
    data: {},
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    post(response) {
      pm.test("Status code is 200", function() {
        pm.response.to.have.status(200);
        var response = JSON.parse(responseBody);
        console.log(response[0].id);
        postman.setEnvironmentVariable("courseId", response[0].id);
      });
    }
  });

  postman[Request]({
    name: "GET COURSE",
    id: "2ff0c841-c76d-49f4-a6cc-c2d1c032c8d6",
    method: "GET",
    address:
      "http://127.0.0.1:83/webservice/rest/server.php?wstoken=585a5e34abe199537fec2640b8252ef7&wsfunction=core_course_get_courses&options[ids][0]=11&moodlewsrestformat=json",
    post(response) {
      pm.test("Status code is 200", function() {
        pm.response.to.have.status(200);
        var legalOrganizationId = JSON.parse(responseBody);
        console.log(legalOrganizationId[0].id);
      });
    }
  });

  postman[Request]({
    name: "DELETE COURSE",
    id: "bace18f1-83c8-4d34-bfa2-a829faa4d518",
    method: "DELETE",
    address:
      "{{courseURL}}?wstoken=585a5e34abe199537fec2640b8252ef7&moodlewsrestformat=json&wsfunction=core_course_delete_courses&courseids[0]=%7B%7BcourseId%7D%7D"
  });
}
