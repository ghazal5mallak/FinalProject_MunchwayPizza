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
       <div className="mb-4">
       <Navbar data={this.state.data.Header}/>
       </div>
      <div className= " text-success container pb-4 pt-4">
      <h2> תפריט </h2>
      <div className="container-fluid row justify-content-center pb-5">
      <img className="image-tafrit"src={"../../image/43.jpeg"} />
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
    );
  }
}

export default Tafrit;
