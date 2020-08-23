import "./index.scss";

const root = document.createElement("div")
root.id = "root";
document.body.appendChild(root);

const title = document.createElement("h1")
title.innerText = "Canvas API"

const canvas = document.createElement("canvas");


root.appendChild(title);
root.appendChild(canvas);