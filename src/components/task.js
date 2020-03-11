import React, { Component } from "react";
import { addtask } from "../redux/action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
class task extends Component {
  render() {
    return (
      <div>
        <input type="text" ref ="task"></input>
        <br></br>
        
        <button type="submit" onClick = {()=>this.props.addtask(this.refs.task.value)}>Add task</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({addtask},dispatch)
}

const mapStateToProps = state =>({})

export default connect(mapStateToProps,mapDispatchToProps)(task);
