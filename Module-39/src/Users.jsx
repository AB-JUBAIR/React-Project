import { useEffect, useState } from "react"

export default function Users() {
    const [user , setUsers] = useState([]);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        
    }, [])





    return(

        <div>
<h1> users :{user.length}</h1>
        </div>
    )
}

//  declear  a state to hold the data