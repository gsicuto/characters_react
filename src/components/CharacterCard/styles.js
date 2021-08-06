import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0;
  margin: 5px;

  img {
    width: 50px;
  }
`;

export const Name = styled.h3`
  background-color: black;
  color: white;
  padding: 3px 0;
`;

export const Section = styled.section`
  background-color: ${(props) => props.bgcolor};
  border-radius: 3px;
  margin: 3px 0;
  width: 100%;
  text-align: center;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button`
  background-color: lightyellow;
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: 400;
`;

export const ButtonDelete = styled(Button)`
  background-color: #aa6543;
`;
