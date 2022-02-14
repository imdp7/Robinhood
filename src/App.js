import React, {useContext} from 'react'
import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Stock from './Stock'
import Home from './Home'
import {UserProvider,UserContext} from './Providers/UserContext'
import Login from './User/Login'
import Chat from './Chat'

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
    exact: true
  },
  {
    path: "/",
    component: Login,
    exact: true
  },
  {
    path:'/stocks/:name',
    component: Stock,
    exact: true
  },
  {
    path:'/stocks/:name/conversation',
    component: Chat,
    exact: true
  },
];


function App() {
  const { user } = useContext(UserContext);

  return (
    <UserProvider>
    <Router> 
      {user ? 
    <div className="App">
      {/* <div className="app__header"> */}
      <Header/>
      {/* {history.location.path !== "/account/login" && <Header />} */}
      <div className="app__body">
          <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
           ))}
          
         <Stock/>
       </Switch>
      </div>
    </div>
      : <Login/>}
    </Router>
    </UserProvider>
         
  );
}

export default App;
