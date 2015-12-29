/*LEFT OFF ON VIDEO 9*/


var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var h = require('./helpers');

/*
App
*/

var App = React.createClass({

  render : function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
            <Header tagline="Fresh Seafood Market" />
          </div>
          <Order />
          <Inventory />
        </div>
    )
  }
});

/*
Header
  <Header/>
*/

var Header = React.createClass({
    render : function(){
      console.log(this.props);
      return(
        <header className="top">
          <h1>Catch
            <span className="ofThe">
              <span className="of">of</span>
              <span className="the">the</span>
            </span>
          Day</h1>
        <h3 className="tagline"><span>{this.props.tagline}</span></h3>
      </header>
    )
  }
})

/*
Order
  <Order/>
*/

var Order = React.createClass({
  render : function(){
    return(
      <p>Order</p>
    )
  }
})

/*
Inventory
  <Inventory/>
*/

var Inventory = React.createClass({
  render : function(){
    return(
      <p>Inventory</p>
    )
  }
})

/*
StorePicker
This will let us make <StorePicker/>
*/

var StorePicker = React.createClass({

  goToStore : function(event) {
    event.preventDefault();
    //get the data from the input
    // transition from <StorePicker/> to <App/>
  },

  render: function(){
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* Comments*/}
        <h2>Please Enter A Store {name}</h2>
        <input type="text" ref="storeId" defaultValue={h.getFunName()} required />
        <input type="Submit" />
      </form>
    )
  }
});

/*
Not Found
*/

var NotFound = React.createClass({
  render : function() {
    return <h1>Not Found!</h1>
  }
});

/*
Routes
*/

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker}/>
    <Route path="/store/:storeId" component={App}/>
    <Route path= "*" component={NotFound}/>
  </Router>
)


ReactDOM.render(routes, document.querySelector('#main'));



// render method pretty much what html do you want me to display. first the component and then the html element
// must always wrap children elemnts in a parent in the return function
