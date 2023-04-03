import React from 'react'

export const Greet = (props) => {
    return (
        <>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </>
    )
}
