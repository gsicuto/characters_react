import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from 'axios';

import "./App.css";

import CharacterCard from "./components/CharacterCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";



class App extends Component {
  
  state = {
    charactersList: []
  } 

  componentDidMount = () => {
    console.log(process.env)
    axios.get(`http://localhost:8000/characters`)
      .then((result)=>{
        this.setState({
          charactersList: result.data
        })
      })
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
