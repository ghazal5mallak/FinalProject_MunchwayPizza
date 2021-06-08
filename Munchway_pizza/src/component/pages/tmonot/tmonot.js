import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "../../part/header/navbar/navbar";
import Infoline from "../../part/header/infoline/infoline";
import Footer from'../../part/footer/footer.js';
import Tmonotcontent from './tmonotcontent/tmonotcontent.js';

class Tmonot extends React.Component{
  constructor() {
    super()
    this.state = { data: [] };
  }
  componentDidMount() {
    fetch('/tmonot')
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
       <div className="text-success container justify-content-center">
       <h2>  גלריה  </h2>
       <Tmonotcontent data={this.state.data.Content}/>
       </div>
       <Footer data={this.state.data.Footer}/>
      </div>
  )}
}


export default Tmonot;