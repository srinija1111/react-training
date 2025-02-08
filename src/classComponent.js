import React, { Component } from "react";
class classComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            message: "iam srinija"
        }
    }
  render() {
    return (
      <div>
        <h1>this.state.message</h1>
      </div>
    )
  }
}
export default classComponent;
