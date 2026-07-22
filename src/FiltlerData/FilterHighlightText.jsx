import React, { useState } from 'react'

const FilterHighlightText = () => {
    const [text, setText] = useState('')

    const persons = [
        "Parley matey Davy Jones Locker",
        "Parley handsomely kick Jack Tar",
        "Holystone careen Shiver me jack"
    ];

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const filterText = persons.filter((person) =>
        person.toLowerCase().includes(text.toLowerCase())
    )



    return (
        <>
        <input type="text" value={text} onChange={handleChange} /><br/>
        {
            filterText.map((person, index)=> {
                const start = person.toLowerCase().indexOf(text.toLowerCase());

                if(text === "") return <p key={index}>{person}</p>

                return(
                    <p key={index}>
                        {person.slice(0, start)}
                        <span style={{backgroundColor:"yellow"}}>
                            {person.slice(start, start + text.length)}
                        </span>
                        <span>
                            {person.slice(start + text.length)}
                        </span>
                    </p>
                )
            })
        }
        </>
    )



}

export default FilterHighlightText;