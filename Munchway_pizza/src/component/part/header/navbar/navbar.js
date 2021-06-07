import React from 'react';
import './navbar.css';

class Navbar extends React.Component {
  state={ clicked: false }

  handleClick = () =>{
  this.setState({ clicked: !this.state.clicked})
  }
  constructor(props){
    super(props);
    console.log(this.props) 
  }


  render(){
    if (!this.props.data.MenuItems){
      return ("oops")
    }
    
    return(
      <div id="navbar1">
      <nav className="NavbarItem container-fluid">
            <div className="menu-icon" onClick={this.handleClick}>
              <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-ioxhost'}></i>
          </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
              {this.props.data.MenuItems.map((item, index) =>{
                return (
                  <li key={index}>
                    <a className={`${item.cName} btn`} href={item.url}>
                      <i className= {item.icon}/>    {item.title}
                    </a>
                  </li>
                )
              })}
          </ul>
      </nav>
    </div>
          )
        }
}
export default Navbar
