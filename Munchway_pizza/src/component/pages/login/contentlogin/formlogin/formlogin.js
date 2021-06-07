import React from 'react';
import FormloginItems from './formloginitems.js';
import Formloginitem from './formloginitem.js'


class Formlogin extends React.Component{
  constructor(props) {
     super(props);
  }
  render() {
    const formComponents = this.props.data.map(item =>
        <Formloginitem
          cName = {item.cName}
          labelfor = {item.labelfor}
          labeltitle = {item.labeltitle}
          inputtype = {item.inputtype}
          inputcName = {item.inputcName}
          placeholder = {item.placeholder}
          name = {item.name}
         />)
    return (
      <form action="#" className="mt-5 col-5 mx-auto p-5">
        <h8>כדי להתחבר לאתר נא למלא את הפרטים</h8>
        {formComponents}
        <div class="form-group justify-content-left">
          <button  type="submit" id="submit" class="mb-2 btn btn-success justify-content-left float-left">שלח</button>
       </div>
      </form>
    );
  }
}
export default Formlogin
