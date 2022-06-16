import './App.css';
import { Box } from '@chakra-ui/react';
// import {Routes,Route} from "react-router-dom"
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <Box className="App">
        <Navbar/>
        <Footer/>
    </Box>
  );
}

export default App;
