import React from 'react';
import Navbar from "../../part/header/navbar/navbar";
import Infoline from "../../part/header/infoline/infoline";
import Footer from "../../part/footer/footer";
import Ordercontent from './ordercontent/ordercontent.js';

class Order extends React.Component{
  constructor() {
    super()
    this.state = { data: [] };
}
componentDidMount() {
    fetch('/order')
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
      <div className="mt-4 mb-4">
      <div className= "text-success container pb-5 pt-5">
      <h2>הזמנה דרך האתר</h2>
      <div className="pb-5">
      <Ordercontent data={this.state.data.Content}/>
      </div>
        </div>
        </div>
      <Footer data={this.state.data.Footer}/>
      </div>
  )}
}
export default Order;
