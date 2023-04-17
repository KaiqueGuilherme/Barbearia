import React from 'react';
import NavBar from './componentes/NavBar/NavBar';
import CardItem from './componentes/card/Card';
import { Box } from '@mui/material';
import { spacing } from '@mui/system';
import "./app.css";
import CardInfo from './componentes/Card_info/Card_Inform';

function App() {
  return (
    <div>
      <NavBar />
      <Box  sx={{ display: 'flex', justifyContent: 'center', m: '8rem'}}>
        <CardItem />
        <CardInfo />
      </Box>
    </div>
  );
}

export default App;