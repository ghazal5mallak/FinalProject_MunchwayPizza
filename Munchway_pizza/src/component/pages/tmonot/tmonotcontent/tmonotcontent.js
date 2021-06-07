import React from 'react';
import ReactDOM from 'react-dom';
import Masony from "react-masonry-component";
import './tmonotcontent.css';

class Tmonotcontent extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
      const masonryOptions = {
        fitWidth: false,
        columnWidth: 300,
        gutter: 30,
        itemSelector: ".photo-item",
      }
      return(
        <div id="tmonot">
          <Masony
            className={"photo-list"}
            elementType={"ul"}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}

        >
        {this.props.data.map((photo)=> (
          <div className="container">
          <li className={'photo-item'}>
          <img src={photo.imgsrc} alt="" />
          <div className="overlay">
          <div className="title">
            {photo.title}
            </div>
            </div>
        </li>
        </div>
      ))}
    </Masony>
    </div>
    );
  }
  }

  export default Tmonotcontent;
