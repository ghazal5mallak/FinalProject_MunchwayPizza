import React from 'react';
import './feed.css';

class Comments extends React.Component {
  constructor() {
    super()
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleAddFeedback() {
    let message = this.state.message;
    fetch('/feedback',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      })
      .then(res => res.json())
      .then((json) => {
        window.location.reload();
      }
      );
  }

  render() {
    return (

      <div className="data mt-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-5">
            <div className="d-flex flex-column comment-section">
              {this.props.data.map((item, index) => {
                return (
                  <div className="bg-white p-2" key={index}>
                    <div className="d-flex flex-row user-info">
                      <img className="rounded-circle" src={item.picture_url} width="40" />
                      <div className="mr-1">
                        <span className="d-block font-weight-bold name">{item.fname} {item.lname}</span>
                        <span className="date text-black-50 float-right">{new Date(item.date).toISOString().split('T')[0]}</span></div>
                    </div>
                    <div className="mt-2">
                      <p className="comment-text float-right">{item.message}</p>
                    </div>
                  </div>
                )
              })}
              {this.props.picture_url &&
                <div className="bg-light p-2">
                  <div className="d-flex flex-row align-items-start">
                  <img className="rounded-circle" src={this.props.picture_url} width="40" />
                  <textarea className="form-control mr-1 shadow-none textarea" name="message" onChange={this.handleInputChange}></textarea>
                  </div>
                  <div className="mt-2 text-right">
                  <button className="btn btn-success btn-sm shadow-none" type="button" onClick={() => this.handleAddFeedback()}>פרסם תגובה</button>
                  </div>
                </div>
              }
              {!this.props.picture_url &&
                <div className="bg-light p-2">
                  You need to login in order to add a feedback
                </div>
              }
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Comments