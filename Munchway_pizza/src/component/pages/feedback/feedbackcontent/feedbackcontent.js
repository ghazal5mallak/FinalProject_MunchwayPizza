import React from 'react';
import Comments from '../feedbackcontent/feed.js';

class Feedbackcontent extends React.Component{
  render(){
    return(
      <div className="pb-5">
   <Comments data={this.props.data} picture_url={this.props.picture_url}/>
      </div>
  )}
}


export default Feedbackcontent
