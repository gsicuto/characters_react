import axios from 'axios'
import React, { Component } from 'react'
import CharacterForm from '../components/CharacterForm'

class CharacterEdit extends Component  {

  state = {
    selectedCharacter: {}
  }

  componentDidMount() {
    axios.get(`https://ironrest.herokuapp.com/characterSi/${this.props.match.params.characterId}`)
      .then((result) => {
        this.setState({
          selectedCharacter: result.data
        })
      })
  }

  changeCharacter = (updatedCharacter) => {;
    this.props.editCharacter(this.state.selectedCharacter.id, updatedCharacter);
    this.props.history.push('/characters')
  } 

  render() {
  return (
    <div>
      <h1>Edit Character</h1>
      <CharacterForm {...this.state.selectedCharacter} action={this.changeCharacter}/>
    </div>
  )}
}

export default CharacterEdit
