import React from "react";
import { Link } from "react-router-dom";
import { Card, Name, Section, ButtonBox, Button, ButtonDelete } from "./styles";

const CharacterCard = (props) => {
  return (
    <Card>
      <img
        src="https://i.pinimg.com/originals/66/c0/f3/66c0f3951cf18634e632c383284ab1f7.png"
        alt={props.name}
      />
      <Name>{props.name}</Name>
      <Section bgcolor="#abcdef">{props.occupation}</Section>
      <Section>{props.weapon}</Section>
      {props.cartoon ? "🦑" : "👎"}
      <ButtonBox>
        <Link to= { `/edit-character/${props.id}` }><Button>Edit</Button></Link>
        <ButtonDelete>Delete</ButtonDelete>
      </ButtonBox>
    </Card>
  );
};

export default CharacterCard;
