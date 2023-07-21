interface Details {
    firstName: string;
    lastName: string;
    salary: number
}

const getDetails = (details: Details): void => {
    console.log(`${details.firstName} ${details.lastName} gets ${details.salary}`)
}

getDetails(
    {
        firstName: "Sreekar",
        lastName: "Reddy",
        salary: 30000
    }
)