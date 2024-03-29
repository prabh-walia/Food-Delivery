import React from "react";
import  ReactDOM from "react-dom";
const element = React.createElement("h1",{id:"header"},"Namaste React");
const element2 = React.createElement("h2",{id:"header"},"Namaste React 2");

const parent = React.createElement("div",{id:"parent"},[element,element2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent)
root.render(parent);