import { useState } from 'react';       // useEffect,
// import { v4 as uuidv4 } from 'uuid';

export const PostForm = () => {
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        // POST Method structure
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    // For reset the input fields...
        setUserId('');
        setTitle('');
        setBody('');
    }

    // useEffect((id) => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    //         method: 'PUT',
    //         body: JSON.stringify({
    //             id: uuidv4(),
    //             title: title,
    //             body: body,
    //             userId: userId,
    //         }),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));
    // }, []);

    return <form onSubmit={submitHandler}>
        <div>
            <input type='text' placeholder="User ID" 
                value={userId}
                onChange={e => setUserId(e.target.value)}
            />
        </div>
        <div>
            <input type='text' placeholder="Title" 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
        </div>
        <div>
            <input type='text' placeholder="Body" 
                value={body}
                onChange={e => setBody(e.target.value)}
            />
        </div>
        <button type='submit'>Submit</button>
    </form>
}

// PUT and Delete...try