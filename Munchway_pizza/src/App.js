import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/pages/home/home.js';
import Signup from './component/pages/sighnup/signup.js';
import Login from './component/pages/login/login.js';
import Tmonot from './component/pages/tmonot/tmonot.js';
import Tafrit from './component/pages/tafrit/tafrit.js';
import Feedback from './component/pages/feedback/feedback.js';
import Order from './component/pages/order/order.js';
class App extends React.Component{
  render() {
  return (
    <BrowserRouter>
      <div>
          <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/sighnup" component={Signup}/>
           <Route path="/login" component={Login}/>
           <Route path="/tmonot" component={Tmonot}/>
           <Route path="/tafrit" component={Tafrit}/>
           <Route path="/feedback" component={Feedback}/>
           <Route path="/order" component={Order}/>
         </Switch>
      </div>
    </BrowserRouter>
  );
}
}
export default App;
