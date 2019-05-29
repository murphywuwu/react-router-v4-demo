import React, { Component } from 'react';
import { Link, Route,Switch, Redirect, withRouter } from 'react-router-dom';
import ShowTheLocation from './ShowTheLocation';
import { renderRoutes } from 'react-router-config'

function Layout1 (props) {
  console.log(props);
  return (<div>layout1{props.children}</div>)
}
// 无论是用withRouter还是直接传递props，组件难道的值中的props.match.path都等于/
// const Layout1 = withRouter(Layout); 

const App = () => {

  return (
    <Switch>
      <Route path="/" render={(props) => {
        return (
          <Layout1 {...props}>
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
    