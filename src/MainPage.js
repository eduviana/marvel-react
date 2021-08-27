import React, { useEffect, useState } from 'react'

export const MainPage = () => {

    const [resp, setResp] = useState([]);


    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await fetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=37005982bfca9b15bc3b9f4e7ecc7406&hash=c07375ec1b66c0f05a7e91ab3259abe2');
        const response = await data.json();
        const heroes = response.data.results;
        console.log(heroes);
        setResp( heroes );
    }


    return (
        <div>
            <h1>MARVEL</h1>
            <ul>
                {
                    resp.map( heroe => (
                        <li key={ heroe.id }> { heroe.title } </li>
                    ))
                }
            </ul>
        </div>
    )
}


