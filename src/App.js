import './App.css';
import { Route, Routes } from "react-router-dom"
import Shipper from './shipper/Shipper';
import { Box } from '@mui/material';
import Navbarr from './components/Navbarr';
import React from 'react';

function App() {
  return (

    <>
      <Box sx={{ position: "absolute", top: "0", zIndex: "1000", width: "100%" }}>
        <Navbarr />

      </Box>

      <Routes>
        <Route path="/" element={<Shipper />} />
        
       
      </Routes>


    </>
  );
}

export default App;
