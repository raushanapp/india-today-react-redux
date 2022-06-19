import './App.css';
import { Box } from '@chakra-ui/react';
import {Routes,Route} from "react-router-dom"
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { SignUp } from './Pages/Signup';

function App() {
  return (
    <Box className="App">
        <Navbar/>
        <Routes>
           <Route path="" element={<Home/>}/>
            <Route path='/signup' element={<SignUp/>}/>
           <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
      
    </Box>
  );
}

export default App;
