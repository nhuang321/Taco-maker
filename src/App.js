import React from 'react';
import Navbar from "./Navbar";
import Order from "./Order";
import MyOrders from "./MyOrders";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      shells: {},
      baseLayers: {},
      mixins: {},
      condiments: {},
      seasonings: {options: []},
      selected: [], 
      made: [], 
      orderNumber: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(ingredient, selected, type){
    let newSelected = [];

    function containsIngredientType(type, list) {
      var i;
      for (i = 0; i < list.length; i++) {
        if (list[i].type == type) {
            return true;
        }
      }
      return false;
    }

    if (containsIngredientType(type, selected)){
        selected = 
          selected.filter(function(value, index, arr){
            return value.type != type;
        })
    }

      newSelected = selected;
      newSelected.push({
        type: type,
        ingredient: ingredient});
    

    this.setState(prevState =>{
      return {
        selected: newSelected
      }
    })
  }

  handleClick(i, orderNumber = null){
    if (i == 1){
      this.setState(prevState =>{
        if(prevState.selected.length == 0){
          alert("We couldn't make a taco with no ingredients")
        }
        else{
          let newMade = prevState.made;
          newMade.unshift({orderNumber: this.state.orderNumber+1, taco: prevState.selected});
          return {
            made: newMade,
            selected: [],
            orderNumber: prevState.orderNumber + 1
          }}})
        }
    
    else if (i == 2){
      let types = [this.state.shells, this.state.baseLayers, this.state.mixins, this.state.condiments, this.state.seasonings];
      let justMade = [];
      for (i = 0; i < types.length; i++){
        let options = types[i].options;
        let random = Math.floor(Math.random()*(0 + options.length));
        justMade.unshift({
          type: types[i].type,
          ingredient: options[random]
        })
      }
      this.setState(prevState=>{
        let newMade = prevState.made;
        newMade.unshift({orderNumber: this.state.orderNumber + 1, taco: justMade})
        return {
          made: newMade,
          selected: [],
          orderNumber: prevState.orderNumber + 1
        }
      })
    }
    else if (i == 3){
      this.setState(prevState=>{
        let newMade = prevState.made.filter(function(value, index, arr){
            return value.orderNumber != orderNumber;
        });
        let num;
        num = prevState.orderNumber;
        if (newMade.length == 0){
          num = 0
        }
        return {
          made: newMade,
          selected: [],
          orderNumber: num
        }
      })
    }
  }

  componentDidMount(){
    let shellAPICall = fetch("https://ct-tacoapi.azurewebsites.net/shells")
    let baseLayersAPICall = fetch("https://ct-tacoapi.azurewebsites.net/baseLayers")
    let mixinAPICall = fetch("https://ct-tacoapi.azurewebsites.net/mixins")
    let condimentsAPICall = fetch("https://ct-tacoapi.azurewebsites.net/condiments")
    let seasoningsAPICall = fetch("https://ct-tacoapi.azurewebsites.net/seasonings")

    Promise.all([shellAPICall, baseLayersAPICall, mixinAPICall, condimentsAPICall, seasoningsAPICall])
      .then(responses => Promise.all(responses.map(response=>response.json())))
      .then(responses => {
          this.setState({shells : {
            type: "shell",
            options: responses[0]
          }});
          this.setState({baseLayers : {
            type: "base layer",
            options: responses[1]
          }});
          this.setState({mixins : {
            type: "mixin",
            options: responses[2]
          }});
          this.setState({condiments : {
            type: "condiment",
            options: responses[3]
          }});
          this.setState({seasonings : {
            type: "seasoning",
            options: responses[4]
          }});
    })
}
  render(){
    if (this.state.seasonings.options.length == 0){
      return <div className = "Loading"><h1>Loading...</h1></div>;
    }
    else{
      return(
        <div className="App">
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact render = {(props) => 
                <Order {...props} state = {this.state} handleChange = {this.handleChange} onClick = {this.handleClick}/>}/>
              <Route path="/MyOrders" render={(props) => <MyOrders {...props} made = {this.state.made} onClick = {this.handleClick}/>}/>
            </Switch>
          </Router>
        </div>
      );
    }
  }
}

export default App;
