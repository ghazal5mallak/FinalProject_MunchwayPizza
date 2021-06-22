import React from 'react';
import './ordercontent.css';


class Ordercontent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cat_index: 0, order: {} };
  }

  addToState(name, key, text) {
    const order = this.state.order;
    order[key] = {
      name, text
    };
    this.setState({ order })
  }

  render() {
    return (
      <div className="row">
        <div className='col-8'>
          <div className='row'>
            {this.props.data.catNav.map((item, index) => (
              <button
                key={index}
                class="btn btn-success btn-left-corner m-2"
                onClick={() => { this.setState({ cat_index: item.index }) }}>
                {item.name}
              </button>
            ))}
          </div>
          <div>
            {this.props.data.categories[this.state.cat_index].questions.map((question, question_index) =>
            (
              <div key={question_index}>
                <div className='row m-1 mt-4'>
                  <h5>{question.question}</h5>
                </div>
                <div className='row'>
                  {this.props.data.categories[this.state.cat_index].options[question_index].map((option, option_index) =>
                  (
                    <button key={option_index} onClick={() => this.addToState(option.name, option.key, option.text)} class="btn btn-warning m-2">{option.name}</button>
                  )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='col-4'>
          <div className='row m-1 mt-4'>
            <h5>Your Order</h5>
          </div>
          {Object.keys(this.state.order).map((item, index) => (
            <h5 className='row'
              key={index}>
              {this.state.order[item].text}: {this.state.order[item].name}
            </h5>
          ))}
        </div>
      </div >
    )
  }
}

export default Ordercontent;
