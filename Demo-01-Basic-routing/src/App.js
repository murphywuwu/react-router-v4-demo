import React, { Component } from 'react';
import { Link, Route,Switch, Redirect } from 'react-router-dom';
import ShowTheLocation from './ShowTheLocation';
import { renderRoutes } from 'react-router-config'

function Layout1 (props) {
return (<div>layout1{props.children}</div>)
}

const App = () => {

  return (
    <Switch>
      <Route path="/" render={() => {
        return (
          <Layout1>
            <Switch>
             <Route path="/a" component={() => (<div>1</div>)}/>
             <Route path="/b" component={() => (<div>2</div>)}/>
            </Switch>
          </Layout1>
        )
      }}>
      </Route>
    </Switch>
  )
}


export default App;
    