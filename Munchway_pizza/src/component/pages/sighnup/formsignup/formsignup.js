import React from 'react';
import FormsignupItems from './formsignupitems.js';
import Formsignupitem from './formsignupitem.js'


class Formsignup extends React.Component{
  constructor(props) {
     super(props);
  }

   render(){
      const formComponents = this.props.data.map(item =>
        <Formsignupitem
          cName = {item.cName}
          labelfor = {item.labelfor}
          labeltitle = {item.labeltitle}
          inputtype = {item.inputtype}
          inputcName = {item.inputcName}
          placeholder = {item.placeholder}
          name = {item.name}
         />)
    return (
      <form action="#" className=" col-5 mx-auto p-5">
        <h8>כדי להירשם לאתר נא למלא את הפרטים</h8>
        {formComponents}
        <div class="form-group">
          <button  type="submit" id="submit" class="mb-2 btn btn-success float-left">שלח</button>
       </div>
      </form>
    );
  }
}
export default Formsignup
