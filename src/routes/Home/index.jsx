import Header from "../../components/Header"
import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import styled from "styled-components";
import Card from '../../components/Card'


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
  return (
    <Container>
      <Header/>
      <h1 style={{margin: '30px 0'}}>Eventos</h1>
      <Card titulo="Limpar porta da Una" organizador="Cleito"/>
      <Card titulo="Tirar pneus da beira do rio" organizador="Juracir"/>
      <Copyright/>
    </Container>
    
  );
}