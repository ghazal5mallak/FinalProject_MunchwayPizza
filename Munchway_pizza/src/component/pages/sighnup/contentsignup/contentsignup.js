import React from 'react';
import ReactDOM from 'react-dom';
import Formsignup from '../formsignup/formsignup.js';


class Contentsignup extends React.Component{
  constructor(props) {
    super(props);
}
  render(){
    return(
      <div className= "justify-content-right">
       <Formsignup data={this.props.data}/>
      </div>
  )}
}


export default Contentsignup
