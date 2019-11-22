import React from "react";
import { connect } from "react-redux";
import Create from "../createNewPlan/createNewPlan"
import Plannes from "../Plannes/plannes"

export class Planner extends React.Component {
  render() {
    return (
      <div>
        <Create/>
        <Plannes/>
      </div>
    )
  }
}

export default connect()(Planner);
