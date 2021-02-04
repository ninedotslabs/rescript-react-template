// get style from css
%%raw(`
import "../styles/app.css";
`)

// example inline style
let stylesBody = ReactDOM.Style.make(~padding="70px 0px",~display="flex",~flexDirection="column",~justifyContent="center",~textAlign="center", ());

// react component declaration
@react.component
  let make = () => {
    <div style=(stylesBody)>
      <h1 className="appTitle"> {"Hello World!"->React.string} </h1>
      <p className="appDescription"> {"It's work! What's next?"->React.string} </p>
      <a
        href="https://rescript-lang.org/docs/manual/latest/introduction"
        className="appLink"
      >
        {"Learn Rescript"->React.string}
      </a>
    </div>
  }