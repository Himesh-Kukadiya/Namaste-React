import React from "react";
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById('root'));

const html = <>
    <div>
        <h1>What is JSX?</h1>
        <p>JSX is not HTML in JavaScript. It is HTML like syntax.</p>
        <p>JSX is also not XML. it is XML like syntax.</p>
        <p>JSX is combination of the JavaScript XML and it is full form of this.</p>
        <ul>
            <li>
                Can write JS and HTML in single file whose extention is .jsx.
            </li>
            <li>
                Fast develop ment to the application.
            </li>
            <li>
                It makes developers life easier.
            </li>
            <li>JSX is different and React is different.</li>
            <li>JSX is not pure JS code. because JS Engine never understand this kind of syntax. It only can understan ES6 (Ecma Script).</li>
        </ul>
        <h5>What is the job of JSX.</h5>
        <ul>
            <li>JSX make developers life easy.</li>
            <li>It is behind the since Core React component. but it make development easy.</li>
            <li>We write code as HTML, latter it conver in core react element.</li>
            <li>After this ReactDOM comes into the picture and convert it in real HTML.</li>
            <li>Transpiled JSX in to code that is understand by the JS Engine that is the job of the Parcel.</li>
            <li>Transpliation is not actual job of the Parcel. it is done by the Babel. and the setup of bable is not by us. it seted up by the Parcel. Bable is a Java Script compiler. some budy says it is a Transpiler. </li>
        </ul>
        <h5>How core react element works works?</h5>
        <ul>
            <li>
                {"React.createElement = > React Element = > JS Object = > ReactDOM = > HTML Element"}
            </li>
        </ul>
        <h5>How JSX works?</h5>
        <ul>
            <li>
                {"JSX code = > Bable = > React.createElement = > JS Object = > ReactDOM = > HTML Element."}
            </li>
        </ul>
    </div>
</>

console.log(html);

root.render(html);