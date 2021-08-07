import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./views/Home";
import CharactersList from "./views/CharactersList";
import CharacterEdit from "./views/CharacterEdit";
import CharacterNew from "./views/CharacterNew";

class App extends Component {

  state = {
    charactersList: [],
  };

  componentDidMount = () => {
    this.getCharacters()    
  };

  getCharacters = () => {
    axios.get(`http://localhost:8000/characters`).then((result) => {
      this.setState({
        charactersList: result.data,
      });
    });
  }

  editCharacter = (id, updatedCharacter) => {
    axios.put(`http://localhost:8000/characters/${id}`, updatedCharacter)
      .then((result) => {
        this.getCharacters();
      } )
  }

  createCharacter = (newCharacter) => {
    axios.post(`http://localhost:8000/characters`, newCharacter)
      .then((result) => {
        this.getCharacters();
      })
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/characters"
            render={(props) => (
              <CharactersList
                {...props}
                characters={this.state.charactersList}
              />
            )}
          />
          <Route path="/edit-character/:characterId" render={(props) => {
            return (
              <CharacterEdit {...props} editCharacter= {this.editCharacter}/>
            )
          }}/>

          <Route path = '/new-character' render={(props) => <CharacterNew {...props} createCharacter={this.createCharacter}/>}/>

        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
