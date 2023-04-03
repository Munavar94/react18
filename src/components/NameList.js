export const NameList = () => {
    const names = ['Bruce', 'Clark', "Diana"];

    // let otherArray = [];
    // names.forEach((item)=> {
    //     otherArray.push(
    //         <div>{item}</div>
    //     )        
    // });
    // otherArray.push('Hero', 'Vilan')

    return <div>
        {
            names.map((name, index) => {
                return <h2 key={index}>{name}</h2>
            })
        }

        {/* {
            otherArray.map((name, index) => {
                return <h2 key={index}>{name}</h2>
            })
        } */}
    </div>
}