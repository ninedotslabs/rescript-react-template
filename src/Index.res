%%raw(`
import "./styles/index.css";
`)

switch(ReactDOM.querySelector("#root")){
  | Some(root) => ReactDOM.render(<App/>, root)
  | None => Js.log("root not found, did u forgot to add <div id='root'></div> to your index.html?")
}