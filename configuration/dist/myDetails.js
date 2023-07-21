"use strict";
const getDetails = (details) => {
    console.log(`${details.firstName} ${details.lastName} gets ${details.salary}`);
};
getDetails({
    firstName: "Sreekar",
    lastName: "Reddy",
    salary: 30000
});
