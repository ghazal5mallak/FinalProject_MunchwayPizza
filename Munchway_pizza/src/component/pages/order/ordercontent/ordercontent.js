import React from 'react';
import './ordercontent.css';
import Formsignupitem from '../../sighnup/formsignup/formsignupitem.js'


class Ordercontent extends React.Component {
  string_to_functions = {
    "updatePizzaType": (param) => this.updatePizzaType(param),
    "updatePizzaSize": (param) => this.updatePizzaSize(param),
    "updatePizzaSauce": (param) => this.updatePizzaSauce(param),
    "addPizzaTopping": (param) => this.addPizzaTopping(param),
    "addDrink": (param) => this.addDrink(param),
    "addExtra": (param) => this.addExtra(param),
    "updateDelievery": (param) => this.updateDelievery(param),
    "updatePayment": (param) => this.updatePayment(param),
    "handleNumberChange": (param) => this.handleNumberChange(param),
    "handleLocationChange": (param) => this.handleLocationChange(param)
  };

  state = {
    currStep: 0,
    currPrice: 0,
    pizza: {
      type: undefined,
      size: undefined,
      sauce: undefined,
      toppings: []
    },
    drinks: [],
    extras: [],
    delievery: undefined,
    payment: undefined,
    number: undefined,
    location: undefined,
    showFormError: false,
    formErrorMessage: '',
  };

  orderButtonHandler = (nextStep, increasedPrice, action, param) => {
    this.state.currStep = parseInt(nextStep);
    this.state.currPrice += increasedPrice;
    if (action) {
      this.string_to_functions[action](param);
    }
    this.setState(this.state);
  }

  decreaseStep() {
    if (this.state.currStep === 1) {
      this.state.pizza.size = undefined;
    } else if (this.state.currStep === 2) {
      this.state.pizza.sauce = undefined;
    } else if (this.state.currStep === 3 || this.state.currStep === 4) {
      this.state.pizza.toppings = [];
    } else if (this.state.currStep === 5) {
      this.state.drinks = [];
    } else if (this.state.currStep === 6) {
      this.state.extras = [];
    } else if (this.state.currStep === 8) {
      this.state.delievery = undefined;
      this.state.number = undefined;
      this.state.location = undefined;
    }
    if (this.state.currStep > 0) {
      this.state.currStep -= 1;
      if (this.state.delievery === false) {
        this.state.currStep -= 1;
      }
      if (this.state.currStep === 3) {
        this.state.currStep -= 2;
      }
    }
    this.setState(this.state);
  }

  increaseStep() {
    if (this.state.currStep === 3) {
      this.state.currStep += 2;
    } else if (this.state.currStep === 8) {
      this.state.showFormError = true;
      if (!this.state.number || this.state.number.length <= 0) {
        this.state.formErrorMessage = "כתוב מספר";
      } else if (!(/^\d+$/.test(this.state.number)) || this.state.number.length != 10) {
        this.state.formErrorMessage = " מספר לא תקין ";
      } else if (!this.state.location || this.state.location.length <= 0) {
        this.state.formErrorMessage = "צרף מיקום";
      } else {
        this.state.currStep += 1;
        this.state.showFormError = false;
        this.state.formErrorMessage = "";
      }
    } else {
      this.state.currStep += 1;
    }
    this.setState(this.state);
  }

  renderOrderDetails() {
    return (
      <div>
        {
          this.state.pizza.type &&
          <h7>הפיצה שלך:</h7>
        }
        <h6>{this.state.pizza.type}</h6>
        <h6>{this.state.pizza.size}</h6>
        <h6>{this.state.pizza.sauce}</h6>
        {
          this.state.pizza.toppings.length > 0 &&
          <h7>התוספות שלך:</h7>
        }
        {
          this.state.pizza.toppings.map((topping, index) => {
            return (
              <h6 key={index}>{topping}</h6>
            )
          })
        }
        {
          this.state.drinks.length > 0 &&
          <h7>השתיה שלך:</h7>
        }
        {
          this.state.drinks.map((drink, index) => {
            return (
              <h6 key={index}>{drink}</h6>
            )
          })
        }
        {
          this.state.extras.length > 0 &&
          <h7>הסלט שלך:</h7>
        }
        {
          this.state.extras.map((extra, index) => {
            return (
              <h6 key={index}>{extra}</h6>
            )
          })
        }
        {
          this.state.number > 0 &&
          <div>
            <h7>מספר נייד:</h7>
            <h6>{this.state.number}</h6>
          </div>
        }
        {
          this.state.location && this.state.location.length > 0 &&
          <div>
            <h7>מיקום:</h7>
            <h6>{this.state.location}</h6>
          </div>
        }
      </div>)
  }

  renderMainContainer() {
    if (this.props.data[this.state.currStep].isForm) {
      return (
        <div>
          <form action="#" className="mx-auto p-5">
            {
              this.props.data[this.state.currStep].options.map((item, index) => {
                let value = this.state.number;
                if (index === 1) {
                  value = this.state.location;
                }
                return (
                  <Formsignupitem
                    key={index}
                    cName={item.cName}
                    labelfor={item.labelfor}
                    labeltitle={item.labeltitle}
                    inputtype={item.inputtype}
                    inputcName={item.inputcName}
                    placeholder={item.placeholder}
                    name={item.name}
                    handleInput={this.string_to_functions[item.onTextChange]}
                    value={value}
                  />)
              })
            }
          </form>
          {
            this.state.showFormError > 0 &&
            <div className='row justify-content-center'>
              {this.state.formErrorMessage}
            </div>
          }
          <div className='row justify-content-center'>
            <div className='col-2'>
              {this.state.currStep > 0 &&
                <button className='row orderButton justify-content-md-center btn btn-danger' onClick={() => this.decreaseStep()}>חזרה</button>
              }
            </div>
            <div className='col-2'>
              {[3, 4, 5, 6, 8].includes(this.state.currStep) &&
                <button className='row orderButton justify-content-md-center btn btn-success' onClick={() => this.increaseStep()}>הבא</button>
              }
            </div>
          </div>
        </div>)
    } else {
      return (
        <div>
          <div className='row justify-content-center'>
            {
              this.props.data[this.state.currStep].options.map((option, index) => {
                if (option.subCat) {
                  return (<h5 className='col-md-12' key={index}>{option.subCat}</h5>)
                }
                return (
                  <div className='col-3'>
                    <button
                      className='orderButton justify-content-md-center btn btn-warning'
                      key={index}
                      onClick={() => this.orderButtonHandler(
                        option.nextStep,
                        option.price,
                        option.action,
                        option.param)}>
                      <div className='col-12 align-self-center btn btn-warning'>
                        {option.optionString}
                      </div>
                    </button>
                  </div>
                );
              }
              )}
          </div >
          <div className='row justify-content-center mt-5'>
            <div className='col-2'>
              {this.state.currStep > 0 &&
                <button className='row orderButton justify-content-md-center btn btn-danger' onClick={() => this.decreaseStep()}>חזרה</button>
              }
            </div>
            <div className='col-2'>
              {[3, 4, 5, 6, 8].includes(this.state.currStep) &&
                <button className='row orderButton justify-content-md-center btn btn-success' onClick={() => this.increaseStep()}>הבא</button>
              }
            </div>
          </div>
        </div>
      )
    }
  }

  updateSizeOptionsArray() {
    this.props.data[1] = {
      question: 'איזה גודל רוצה להזמין?',
      options: [
        {
          optionString: 'אישית',
          nextStep: 2,
          param: 0,
          action: 'updatePizzaSize'
        },
        {
          optionString: 'בינונית',
          nextStep: 2,
          param: 1,
          action: 'updatePizzaSize'
        },
        {
          optionString: 'משפחתית',
          nextStep: 2,
          param: 2,
          action: 'updatePizzaSize'
        },
        {
          optionString: 'ענקית',
          nextStep: 2,
          param: 3,
          action: 'updatePizzaSize'
        }
      ]
    };
    if (this.state.pizza.type === 'שחיתות') {
      this.props.data[1].options.splice(-2);
    }
  }


  updatePizzaType(type) {
    if (type === '0') {
      this.state.pizza.type = 'רגילה';
    } else if (type === '1') {
      this.state.pizza.type = 'טבעונית';
    } else if (type === '2') {
      this.state.pizza.type = 'שחיתות';
    } else if (type === '3') {
      this.state.pizza.type = 'בצק כוסמין';
    }else if (type === '4') {
      this.state.pizza.type = 'בצק ללא גלוטן';
    }
    this.updateSizeOptionsArray();
  }

  updatePizzaSize(size) {
    if (size === 0) {
      this.state.pizza.size = 'אישית';
    } else if (size === 1) {
      this.state.pizza.size = 'בינונית';
    } else if (size === 2) {
      this.state.pizza.size = 'משפחתית';
    } else if (size === 3) {
      this.state.pizza.size = 'ענקית';
    }
    if (this.state.pizza.type === 'שחיתות') {
      this.state.currStep = 4;
    }
  }

  updatePizzaSauce(sauce) {
    if (sauce === 0) {
      this.state.pizza.sauce = 'עגבניות';
    } else if (sauce === 1) {
      this.state.pizza.sauce = 'שמנת פטריות';
    } else if (sauce === 2) {
      this.state.pizza.sauce = 'רוזה';
    } else if (sauce === 3) {
      this.state.pizza.sauce = 'שמנת פטריות + רוזה';
    }
  }

  addPizzaTopping(topping) {
    if (!this.state.pizza.toppings.includes(topping)) {
      this.state.pizza.toppings.push(topping);
    }
  }

  addDrink(drink) {
    if (!this.state.drinks.includes(drink)) {
      this.state.drinks.push(drink);
    }
  }

  addExtra(extra) {
    if (!this.state.extras.includes(extra)) {
      this.state.extras.push(extra);
    }
  }

  updateDelievery(delievery) {
    this.state.delievery = delievery
  }

  updatePayment(payment) {
    this.state.payment = payment
  }

  handleNumberChange(event) {
    this.state.number = event.target.value
    this.setState(this.state);
  }

  handleLocationChange(event) {
    this.state.location = event.target.value
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        {/* <div className='container'> */}
          <div className='row'>
            <div className='col-6'>
              <h6>{this.props.data[this.state.currStep].question}</h6>
              {this.renderMainContainer()}
            </div>
            <div className='col-6'>
              {this.renderOrderDetails()}
            </div>
          </div>
        </div>
      // </div >
    )
  }
}

export default Ordercontent;
