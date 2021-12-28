import React, {useContext} from 'react'
import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Stock from './Stock'
import SignUp from './User/SignUp'
import Home from './Home'
import PasswordReset from './User/PasswordReset'
import {UserProvider,UserContext} from './Providers/UserContext'
import ProfilePage from './User/ProfilePage'
import Login from './User/Login'
import { auth } from './firebase'

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={true}
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
    exact: true
  },
  {
    path: '/account/login',
    component: Login,
    exact: true
  },
  {
    path: '/account/register',
    component: SignUp,
    exact: true
  },
  {
    path:'/account/reset-password',
    component: PasswordReset,
    exact: true
  },
];


function App() {
  const { user } = useContext(UserContext);

  return (
    <UserProvider>
    <Router>

    <div className="App">
      <div className="app__header">
          <Header/>
      </div>
      <div className="app__body">
          <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
           ))}
          
         <Stock/>
       </Switch>
      </div>
    </div>

    </Router>
    </UserProvider>
         
  );
}

export default App;
