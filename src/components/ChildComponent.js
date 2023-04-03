export const ChildComponent = (props) => {
    return (
        <div>
            <button 
                onClick={() => props.greetHandler('From child to parent',
                 '2nd Arg', '3rd Arg', '4th Arg')}>Greet Parent</button>
        </div>
    )
}

// Method 2
// export const ChildComponent = ({greetHandler}) => {
//     return (
//         <div>
//             <button onClick={greetHandler}>Greet Parent</button>
//         </div>
//     )
// }