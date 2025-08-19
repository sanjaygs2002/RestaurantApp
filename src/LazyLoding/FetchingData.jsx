import React, { useEffect, useState } from 'react'

function FetchingData() {
    const [state,setState]=useState([]);

    useEffect(()=>{
       const fetchData=async()=>{
        try{
            const response=await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setState(data);
        }catch(error){
            console.log(error);
            
        }
       }
       setTimeout(fetchData,2000);
    })

  return (
    <>
    <h1>Listing random fetch items</h1>
    <ul>
        {state.map(user => (
            <li key={user.id}>{user.name}</li>
        ))}

    </ul>
    </>
  )
}

export default FetchingData;