import React, { Component } from 'react'
import { Button } from '../styles'

class CharacterForm extends Component {

  state = {
      id: '',
      name: '',
      occupation: '',
      weapon:'',
      cartoon: false
    }
  

  static getDerivedStateFromProps(props, state) {

    if (props.id !== state.id) {
      return {
        ...props
      };
    }
    return null;
  }


  handleChange = (event) => {
    let {name, value, type} = event.target

    if (type === 'checkbox') {
      value = event.target.checked
    } 

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.action(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <label>Name</label>
        <input name='name' type='text' placeholder='Insert character name' value={this.state.name} onChange={this.handleChange}/>

        <label>Occupation</label>
        <input name='occupation' type='text' placeholder='Insert character occupation' value={this.state.occupation} onChange={this.handleChange}/>

        <label>Weapon</label>
        <input name='weapon' type='text' placeholder='Insert character weapon' value={this.state.weapon} onChange={this.handleChange}/>

        <label>Cartoon</label>
        <input name='cartoon' type='checkbox'  checked={this.state.cartoon} onChange={this.handleChange}/>

        <Button type='submit'>Save</Button>

      </form>
    )
  }
}

export default CharacterForm
