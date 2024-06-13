import * as React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
  max-width: 500px;
  width: 500px;
  padding: 20px;
  text-align: left;
  border-radius: 10px;
  box-shadow: 1px 5px 20px grey;
  margin: 20px;
`
const ButtonInscrevaSe = styled.button`
  width: 40%;
  padding: 10px;
  border: none;
  background: #1976d2;
  border-radius: 10px;
  color: white;
`

export default function Card(props) {
  return (
    <CardContainer>
      <h2>{props.titulo}</h2>
      <h4>ORGANIZADOR: <p>{props.organizador}</p> </h4>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZqJdltHhM09jw08a2HcmQmeNA2etjsaprng&s" alt="aaa" />
      <h3>Descrição:</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint rem repudiandae reprehenderit incidunt voluptate facilis dolores aspernatur iusto aperiam obcaecati iure inventore voluptates maxime quasi enim, illo eum eaque nam!</p>
      <ButtonInscrevaSe>Se Inscreva</ButtonInscrevaSe>
    </CardContainer>
  );
}
