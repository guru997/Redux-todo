import React, { Component } from "react";
import { connect } from "react-redux";
import { deletetask } from "../redux/action";

import { bindActionCreators } from "redux";

class list extends Component {
  render() {
    return (
      <div>
        {console.log(typeof this.props.tasks)}
        {this.props.tasks.map((t,i) => (
          <div>
            <p key={i}>{t}</p>
            <button
              onClick={() => {
                this.props.deletetask(this.props.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

function mapDisPatchToProps(dispatch) {
  return bindActionCreators({ deletetask }, dispatch);
}
export default connect(mapStateToProps, mapDisPatchToProps)(list);
