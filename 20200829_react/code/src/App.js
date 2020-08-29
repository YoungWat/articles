import React, { Component } from "react"
import "./App.css"

import ChildComponent from "./components/child_component"

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "parent",
      childName: "child",
      grandchildName: "grandChild",
      msg: "",
    }
  }

  render() {
    return (
      <div className="App">
        <div>parent[名字:{this.state.name}] </div>
        <div>msg:{this.state.msg}</div>
        <ChildComponent
          name={this.state.childName}
          grandchildName={this.state.grandchildName}
          onSay={(msg) => {
            // console.log(`msg from child:${msg}`)
            this.setState({
              msg,
            })
          }}
        />
      </div>
    )
  }
}

export default App
