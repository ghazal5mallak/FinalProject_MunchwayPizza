import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'react-bootstrap';


class Cards extends React.Component{
  render(){
    return(
      <Card
      id={this.props.item.id}
      className={this.props.item.className}
      style={{ width: '20rem' }}>
        <Card.Img
         src={this.props.item.img}  className="mr3"/>

        <Card.Body className="cardbody">
          <Card.Title className="title">
          {this.props.item.title}
          </Card.Title>
          <Card.Text className="text">
          {this.props.item.text}
          </Card.Text>
         </Card.Body>
         <Card.Link className="href">
         <a href= {this.props.item.url}>
         {this.props.item.icon}</a></Card.Link>
      </Card>
)}}
export default Cards;
