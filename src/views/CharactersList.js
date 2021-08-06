import React, { Component } from "react";
import CharacterCard from "../components/CharacterCard";

class CharactersList extends Component {
  render() {
    return (
      <>
        <h1>All Characters</h1>
        <div style={{ display: "flex" }}>
          {this.props.characters.map((character) => (
            <CharacterCard {...character} />
          ))}
        </div>
      </>
    );
  }
}

export default CharactersList;
