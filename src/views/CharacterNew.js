import React, { Component } from 'react'
import CharacterForm from '../components/CharacterForm'

class CharacterNew extends Component {

  newCharacter = (newCharacter) => {
    this.props.createCharacter(newCharacter);
    this.props.history.push('/characters')
  }

  render() {
    return (
      <div>
        <h1>New Character</h1>
        <CharacterForm action={this.newCharacter}/>
      </div>
    )
  }
}

export default CharacterNew
