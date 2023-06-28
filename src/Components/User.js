import React, {useState, useEffect} from "react"; 
import axios from "axios";

const User = () => {

    let [person, setPerson] = useState({}) 

    console.log(person) 

    useEffect(() => {
        axios.get("https://randomuser.me/api/")
        .then(res => setPerson(res.data.results[0]))
        .catch(err => console.log(err))
    },[])

    return(
        <div>
            <h1>User Details: </h1>
            {
            person.name &&(
            <div>
                 <img src={person.picture.medium} alt={person.name.first} />

                 <h1>{person.name.title} {person.name.first} {person.name.last}</h1>
            </div>
            )
}
        </div>

    )
    
}

export default User;