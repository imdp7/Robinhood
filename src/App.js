import React, {useContext} from 'react'
import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Stock from './Stock'
import SignIn from './User/SignIn'
import SignUp from './User/SignUp'
import Home from './Home'
import PasswordReset from './User/PasswordReset'
import {UserContext} from './Providers/UserContext'
import ProfilePage from './User/ProfilePage'
import Login from './User/Login'

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
    path: "/us/en/",
    exact: true,
    component: Home,
    
  },
  {
    path: "/",
    component: Main,
    exact: true,
  },

  {
    path:'/stocks/:name',
    component: Stock,
  },
  {
    path: '/account/login',
    component: Login,
  },
  {
    path: '/account/register',
    component: SignUp,
  },
  {
    path:'/account/reset-password',
    component: PasswordReset,
  },
];


function App() {
  const user = null;
  
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
          
         <Stock/>
       </Switch>
          
        </div>
      </div>
    </div>
    </Router>
         
  );
}

export default App;
