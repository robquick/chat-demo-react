import React from "react";
import Header from "./header.jsx"

let App = (props) => {
  return (
    <div>
        <Header />
        {props.children}
    </div>
  )
}

App.propTypes = {
    children: React.PropTypes.element.isRequired
}

export default App;
