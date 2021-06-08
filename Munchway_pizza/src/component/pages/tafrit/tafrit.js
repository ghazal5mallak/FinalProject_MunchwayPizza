import React from 'react';
import Navbar from "../../part/header/navbar/navbar";
import Infoline from "../../part/header/infoline/infoline";
import Footer from "../../part/footer/footer";
import  './tafrit.css';


class Tafrit extends React.Component {
  constructor() {
    super()
    this.state = { data: [] };
}
componentDidMount() {
    fetch('/tafrit')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }
    render() {
      if (this.state.data.length==0)
           return (<i class="fa fa-spinner"></i>);
    return (
      <div>
      <div className="container-fluid row justify-content-right">
      <a href="/"><img className="limg col-1.5 " src="../../image/logosha.png"/></a>
       <div className="limg col-10 ">
       <Infoline/>
       </div>
       </div>
      <Navbar  data={this.state.data.Header}/>
      <div className= " text-success container">
      <h2> תפריט </h2>
      <div className="container-fluid row justify-content-center mt-5 pb-5">
      <img className="image-tafrit"src={"../../image/43.jpeg"} />
        {/* <img className="image-tafrit col-6"src={"../../image/bltaf.jpeg"} />
        <img className="image-tafrit col-6"src={"../../image/btaf.jpeg"} /> */}
        </div>
        </div>
        <Footer data={this.state.data.Footer}/>
      </div>
    );
  }
}

export default Tafrit;
