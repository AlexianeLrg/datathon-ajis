import React, { Component } from 'react';
import Page from './components/Page';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path='/Q1' render={() => (
              <Page text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." buttons={[
                { text: "foo", url: "/Q2" },
                { text: "dont click me", url: "" },
              ]}/>
            )}/>
            <Route path='/Q2' render={() => (
              <Page text="hjuhguhgruhgruhguhrugugrhugrhughr" buttons={[
                { text: "dont touch me", url: "" },
                { text: "bar", url: "/Q1" },
              ]}/>
            )}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
