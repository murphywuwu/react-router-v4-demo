import React, { Component } from 'react';
import { Link, Route,Switch, Redirect } from 'react-router-dom';
import ShowTheLocation from './ShowTheLocation';

class App extends Component {
  render() {
    
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/category">Category</Link></li>
          </ul> 
        </nav>
        <ShowTheLocation/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/products" component={Products}/>
          <Route path="/category" component={Category}/>
          <Redirect to="/products"/>
          <Route component={NoMatch}/>
        </Switch>
    </div>
    );
  }
}


/*Home component */
const Home = (props) => (
  <div>
    <h2>Home {console.log(props)}</h2>
  </div>
)

/*Product component */
const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
)

/*Category component*/
const Category = (props) => {
  console.log(props);
return(
  <div>
    <h2>Category</h2>
  </div>
)}

const NoMatch = () => {
  return (<div>404</div>);
}


export default App;
    