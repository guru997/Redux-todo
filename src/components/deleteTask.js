import React, { Component } from "react";
import { deletetask } from "../redux/action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class deleteTask extends Component {
  render() {
    return <div className="row">{this.props.task}</div>;
  }
}

function mapDisPatchToProps(dispatch) {
  return bindActionCreators({ deletetask }, dispatch);
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDisPatchToProps)(deleteTask);
