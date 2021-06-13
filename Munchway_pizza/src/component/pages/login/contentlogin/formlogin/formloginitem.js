import React from "react"

class Formloginitem extends React.Component{
  constructor(props) {
   super(props);
}
  render() {
    return (
      <div className={this.props.cName}>
        <label for={this.props.labelfor}>
          <b>{this.props.labeltitle}</b>
        </label>
        <input
         type={this.props.inputtype}
         className={this.props.inputcName}
         placeholder={this.props.placeholder}
         name={this.props.name}
         onChange={this.props.handleInputChange}
         required
        />
      </div>
    )
  }
}
export default Formloginitem
