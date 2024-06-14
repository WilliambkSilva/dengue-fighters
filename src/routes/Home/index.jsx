import Header from "../../components/Header";
import * as React from 'react';
import { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import styled from "styled-components";
import Card from '../../components/Card'
import { getEvent } from "../../services/getEvent";

export function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/juninhorx">
        Ricardo Xavier
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvent();
        console.log(data)
        setEvents(data);
      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <Container>
      <Header/>
      <h1 style={{margin: '30px 0'}}>Eventos</h1>
      <Card titulo="Limpar porta da Una" organizador="Cleito"/>
      <Card titulo="Tirar pneus da beira do rio" organizador="Juracir"/>
      {events.map((event, index) => (
        <Card key={index} titulo={event.eventName} organizador={event.creator.completeName} description={event.eventDescription} />
      ))}
      <Copyright/>
    </Container>
    
  );
}