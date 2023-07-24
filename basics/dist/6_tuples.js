"use strict";
//number followed by string
let stuff;
stuff = [2, "Sreekar"];
//3 followed by a number
let numbers = [1, 3];
let response = [200, "Ok"];
response.push("success");
console.log(response[0]);
console.log(response[1]);
console.log(response[2]);
//tuple array
let responses = [];
responses.push([404, "Error"]);
responses.push([200, "Success"]);
responses.forEach(s => console.log(s[0], s[1]));
