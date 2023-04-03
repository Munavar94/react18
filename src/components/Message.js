import { useState } from 'react';

export const Message = (props) => {
    const [message, setMessage] = useState('Welcome Visitor');

    // const test = () => setMessage(props.name);

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage('Thank You For Subscribing!')}
                >Subscribe
            </button>

            {/* <p>Method 2</p> */}
            {/* <h2 onClick={test}>{message}</h2> */}
        </div>
    )
}