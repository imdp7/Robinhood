import React from 'react'
import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Stock from './Stock'
import SignIn from './User/SignIn'
import SignUp from './User/SignUp'
import PasswordReset from './User/PasswordReset'
import UserProvider from './Providers/UserProvider'
import ProfilePage from './User/ProfilePage'

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
  },
  {
    path: '/account/login',
    component: SignIn,
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
    <UserProvider>
    {/* user ?
        <ProfilePage />
      : */}
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
    </UserProvider>
  );
}

export default App;
