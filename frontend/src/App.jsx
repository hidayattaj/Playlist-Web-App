import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";


function App() {
  return (
    <Box minH={"100vh"} bg="gray.100">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/add" element={<AddPage/>}/>
      </Routes>
    </Box>
  );
}

export default App;