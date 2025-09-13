/*
const heading = document.createElement("h1");
heading.innerHTML = "Hello"

const root = document.getElementById("root");
root.appendChild(heading);
*/

/*
const parent = React.createElement(
    "div", { id: "parent" },
    [
        React.createElement("div", { id: "child1" }, React.createElement("h1", { id: "heading1" }, "Hello World!")),
        React.createElement("h2", { id: "heading2" }, "Welcome")
    ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

import ReactDOM from 'react-dom/client';

const Hello = ({ message }) => {
    return (
        <h4>{message}</h4>
    )
}

const App = () => {
    return (
        <div>
            <h1>React Notes</h1>
            <Hello message={"Hello World!"} />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
