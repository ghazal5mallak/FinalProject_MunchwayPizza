import React from 'react';
import Navbar from "../../part/header/navbar/navbar";
import Infoline from "../../part/header/infoline/infoline";
import Footer from "../../part/footer/footer";
import VideoJS from '../../../video/VideoJS.js';
import './home.css';

class Home extends React.Component{
  constructor() {
    super()
    this.state = { data: [] };
}
componentDidMount() {
    fetch('/home')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }
  render(){
    if (this.state.data.length==0)
         return (<i class="fa fa-spinner"></i>);
         console.log(this.state.data)
    return(
      <div>
       <div className="container-fluid row justify-content-right">
       <a href="/"><img className="limg col-1.5 " src="../../image/logosha.png"/></a>
       <div className="limg col-10 ">
       <Infoline/>
       </div>
       </div>
       <Navbar data={this.state.data.Header}/>
       <div className= "text-success container">
       <div className="text-success mt-4 mb-3">
       <h1>Munchway Pizza</h1>
       </div>
       <div className="pb-5">
       <VideoJS/>
       </div>
       </div>
       <div className=" container-fluid">
       <Footer data={this.state.data.Footer}/>
       </div>
       <div className="limgage container-fluid row ">
       <div className="limgage">
       <a href="/Order"><img className="limgage col-1.5 justify-content-right" src="../../image/shfik.png"/></a>
       </div>
      </div>
      </div>
  )}
}
export default Home;
