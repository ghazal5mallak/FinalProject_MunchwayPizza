import React from 'react';
import Navbar from "../../part/header/navbar/navbar";
import Infoline from "../../part/header/infoline/infoline";
import Contentlogin from './contentlogin/contentlogin.js';
import Footer from "../../part/footer/footer";
import  './login.css';

class Login extends React.Component{
  constructor() {
    super()
    this.state = { data: [] };
  }
  componentDidMount() {
    fetch('/login')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }
  render(){
    if (this.state.data.length==0)
         return (<i class="fa fa-spinner"></i>);
    return(
      <div>
      <div className="container-fluid row justify-content-right">
      <a href="/"><img className="limg col-1.5 " src="../../image/logosha.png"/></a>
       <div className="limg col-10 ">
       <Infoline/>
       </div>
       </div>
      <Navbar data={this.state.data.Header}/>
      <div className="pb-5">
      <Contentlogin data={this.state.data.Content}/>
      </div>
       <Footer data={this.state.data.Footer}/>
      </div>
  )}
}


export default Login;