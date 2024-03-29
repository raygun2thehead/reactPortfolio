import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container"
        style={{
          marginBottom: '15px'
        }}
      >
          <div className="row">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div 
              className="col-lg-9 main"
              >
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/projects" component={Projects} />
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
