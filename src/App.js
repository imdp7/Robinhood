import React from 'react'
import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Stock from './Stock'

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

const routes = [
  {
    path: "/",
    exact: true,
    component: Main,
    
  },
  {
    path:'/stocks/:name',
    component: Stock,
  }
  
];


function App() {
  return (
    <Router>
    <div className="App">
      <div className="app__header">
      <Header/>
      </div>
      <div className="app__body">
        <div className="app__container">
  
          <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
           ))}
         <Main/>
       </Switch>
          
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
