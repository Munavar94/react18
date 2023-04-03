import { ChildComponent } from "./ChildComponent";

export const ParentComponent = () => {
    const greetParent = (childName, ...otherArgs) => {
        alert(`Hello Parent - ${childName} and ${otherArgs}`);
    }

    return <ChildComponent greetHandler={greetParent} />
}
