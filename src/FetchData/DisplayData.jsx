import { useState, useEffect } from "react";
import useFetchData from "./useFetchData";

const DisplayData = () => {
    const WEB_API = 'https://jsonplaceholder.typicode.com/users';

    const {user, loading, error} = useFetchData(WEB_API);

    if(error) return <div>Error Data is not fetching...</div>
    if(loading) return <div>Loading...</div>


    return (
        <>
        {
            user.splice(0, 5).map((item, index)=> (
                <ul key={index}>
                    <li>{item.name}</li>
                </ul>
            ))
        }
        </>
    )
}

export default DisplayData;