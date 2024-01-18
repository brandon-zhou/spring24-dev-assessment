
// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"
import Home from "./Home";
import Notes from "./Notes";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/notes/:userid" element = {<Notes/>}/>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}



export default App;
