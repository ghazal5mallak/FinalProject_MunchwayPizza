import React from 'react';
import ReactDOM from 'react-dom';
import Formlogin from './formlogin/formlogin.js';

class Contentlogin extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className= "container justify-content-right">
       <Formlogin data={this.props.data}/>
      </div>
  )}
}


export default Contentlogin
