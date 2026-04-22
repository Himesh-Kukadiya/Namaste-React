import React from "react";
import ReactDOM from "react-dom/client";

const componentRoot = ReactDOM.createRoot(document.getElementById("component"));

const Component = () => <>
    <h1>Component! 🚀</h1>
    <p> Every thing in react is component. for example card, button, heading, footer... everything is component</p>
    <h3>Types of component?</h3>
    <ul>
        <li>Class Based Component (old way) (Code lagacy)</li>
        <li>Functional Component (new way)</li>
    </ul>
    <h5>What is React Functional Component?</h5>
    <p>A function that return simple JSX code it is called functional component.</p>
    <ul>
        <li>It is just a normal JavaScript function.</li>
        <li>keep an eye when you build functional component is to keep first letter of the function with capitall.</li>
        <li>
            Emaple...
            <pre style={{ background: "yellow" }}>
                {`const FirstComponent = () => { 
    return <h1> Hello World! </h1>
}`}
            </pre>
        </li>
    </ul>
    <h5>How babel understand that is cuntional component?</h5>
    <p>When you call any type of component you should wrap it with the {`<ComponentName />`}. and when we do such kind of thing it is knowan as Component Composition.</p>
</>

componentRoot.render(<Component />);