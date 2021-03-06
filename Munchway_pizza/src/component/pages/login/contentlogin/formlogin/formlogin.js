import React from 'react';
import Formloginitem from './formloginitem.js'


class Formlogin extends React.Component{
  constructor(props) {
     super(props);
     this.handleInputChange = this.handleInputChange.bind(this);
     this.state = { displayMessage: null };
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  login() {
    fetch('/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "email": this.state.email, "password": this.state.password })
      })
      .then(res => res.json())
      .then(json => {
        if (json.res === true) {
          window.location.replace("/");
        } else {
          this.setState({ displayMessage: json.res })
        }
      }
      );
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
          handleInputChange = {this.handleInputChange}
         />)
         const err = this.state.displayMessage !== null ? (<div className="form-login-error"> <h10> {this.state.displayMessage} </h10> </div>) : (<div></div>)
    return (
      <div className="loginContainer justify-content-center">
        <h8> להתחברות מלא את הפרטים: </h8>
        {formComponents}
        <div className="form-group form-check login-form-check">
          <label className="form-check-label login-check-label">
           זכור אותי           
          </label>
           <input  className="form-check-input login-check-input" type="checkbox" name="remember" required/> 
        </div>
        <div class="form-group">
          <button onClick={() => this.login()} className="mb-5 btn btn-success justify-content-left float-left">שלח</button>
        </div>
        { err}
      </div>
    );
  }
}
export default Formlogin
