const parent=React.createElement("div",{id:"parent"},
[ React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"I am H1 tag"),
    React.createElement("h4",{},"I am H4 tag")]
),
React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"I am H1 tag"),
    React.createElement("h4",{},"I am H4 tag")]
)]
);

const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);