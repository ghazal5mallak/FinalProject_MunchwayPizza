import React from 'react';
import './footer.css';

class Footer extends React.Component {
  state={ clicked: false }

  handleClick = () =>{
  this.setState({ clicked: !this.state.clicked})
  }

  render(){
    return(
      <div id="navbar2">
      <nav className="FooterItem container-fluid mt-4">
            <div className="menu-icon" onClick={this.handleClick}>
          </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
              {this.props.data.FooterItems.map((item, index) =>{
                return (
                  <li key={index}>
                  <a className={`${item.cName} btn`} href={item.url}>
                      <i className= {item.icon}/>
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
export default Footer
