import React from "react";
import { Routes, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import NumberPage from './components/NumberPage';
import WordPage from './components/WordPage';
import ColoredWordPage from './components/ColoredWordPage';


//Remember, we can write these functional components in their own files 
//to be exported and imported to the App component.
//We've combined them here to simplify our example.

function App() {
  return (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:number" element={<NumberPage />} />
        <Route path="/:word" element={<WordPage />} />
        <Route path="/:word/:color/:bgColor" element={< ColoredWordPage/>} />
    </Routes>
  );
}

export default App;
