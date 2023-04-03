import { useState } from 'react';

export const Form = () => {
    const [userName, setUserName] = useState('');
    const [description, setDescription] = useState('');
    const [country, setCountry] = useState('India');    // null or undefined

    const handleSubmit = (event) => {
        event.preventDefault();

        alert(`Form data is ${userName}`);
        console.log(description);
        alert(`Country selected is: ${country}`)
    };

    const handleSelect = (e) => {
        setCountry(e.target.value)
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type='text'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div>
                <label>Description:</label>
                <input
                    type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Country:</label>
                <select 
                    // name='country' id='country'
                    value={country}
                    onChange={handleSelect}
                >
                    <option value='India'>India</option>
                    <option value='Canada'>Canada</option>
                    <option value='USA'>USA</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>

        <div> { description }
            {/* { description && description.map(item => <h1>{item}</h1>)} */}
        </div>
        </>
    )
}