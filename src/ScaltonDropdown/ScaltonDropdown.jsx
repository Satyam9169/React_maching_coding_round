import React, { useEffect, useState } from 'react'

const ScaltonDropdown = () => {
    const [user, setUser] = useState([]);
    const [country, setCountry] = useState('');

    const countries = [
        { id: 1, name: "india", cities: ["delhi", "mumbai", "kolkata"] },
        { id: 2, name: "nepal", cities: ["kathmandu", "pokhara"] },
        { id: 3, name: "china", cities: ["xyz", "abc"] },
        { id: 4, name: "USA", cities: ["washington", "NY"] },
    ];

    const handleCountryChange = (e) => {
        setCountry(e.target.value)
    }

    const fetchData = async () => {
        try { setUser(countries) } catch (e) { console.log(e); }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <label htmlFor="countries">Select a Country: </label>
            <select name='countries' id='countries' onChange={handleCountryChange} value={country}>
                <option value="" disabled>
                    Select a country
                </option>
                {
                    user.map(item => (<option key={item.id} value={item.name}>{item.name}</option>))
                }
            </select>

            {
                country && (<div>
                    <h2>Cities in selected: {country}</h2>
                    <ul>
                        {
                            countries.find(setcountry => (setcountry.name === country))
                                .cities.map(city => (<li key={city.id}>{city}</li>))
                        }
                    </ul>
                </div>)
            }
        </div>
    )
}

export default ScaltonDropdown