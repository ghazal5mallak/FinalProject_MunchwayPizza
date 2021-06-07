import React from 'react';
import './infoline.css';

class Infoline extends React.Component{
  render(){
    return(
      <div id="info" className="container-fluid row">
      <h3><i class="fa fa-clock-o"></i> ראשון-שבת 12:00-00:0</h3>
      <h3><i class="fa fa-phone"></i>0526262412</h3>
      <h3><i class="fa fa-map-marker"></i> עספיא, כביש ראשי אבא חושי 672 </h3>
      </div>
  )}
}
export default Infoline;
