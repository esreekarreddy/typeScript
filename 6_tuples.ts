//number followed by string
let stuff: [number, string]
stuff = [2, "Sreekar"]


//3 followed by a number
let numbers: [number, 3] = [1,3]


//tuple with codes & responses
type HTTPresponse = [number, string];
let response = [200, "Ok"]
response.push("success")

console.log(response[0])
console.log(response[1])
console.log(response[2])

//tuple array
let responses: HTTPresponse[] =[]
responses.push([404, "Error"])
responses.push([200, "Success"])
responses.forEach(s=>console.log(s[0], s[1]))
