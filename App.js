const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{}," i am h1 tag"),React.createElement("h2",{},"i am inside tag")]))
// /
console.log(parent);//object
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);

        //every thing render inside the