import axios from "axios";
import _ from "lodash"

//creating a type for User which is returned from the API
interface User {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    },
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

//making a get request to JSON placeholder API
axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
.then((res) => {
    res.data.forEach(getUser)
})
.catch(e=> console.log(e.code))

function getUser(user: User) {
    console.log(user.name, user.phone)
}


//lodash methods
console.log(_.sample([12, 33, "SR"]))