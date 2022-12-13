import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import { HashRouter, Routes, Route, Navigate, Router } from "react-router-dom";

//main pages
import About from './components/About';
import Resume from './components/Resume';
import DesignWork from './components/DesignWork';

//projects 
import Iterative from './components/projects/iterative/Iterative';
import Personas from './components/projects/personas/Personas';
import Redesign from './components/projects/redesign/Redesign';
import Ford from './components/projects/ford/Ford';

function App() {
  return (
    <div className="App">
     {/* <Navbar/> */}
     <Router>
                <Routes>
                    <Route path="/mycoolportfolio" element={<About/>} />
                    <Route path="/designWork" element={<DesignWork/>} />
                    <Route path="/resume" element={<Resume/>} />

                    <Route path="/personas" element={<Personas/>}/>
                    <Route path="/iterative" element={<Iterative/>}/>
                    <Route path="/redesign" element={<Redesign/>}/>
                    <Route path="/ford" element={<Ford/>}/>

                    <Route path="*" element={<Navigate to={"/"} replace />} />
                </Routes>
      </Router>
    </div>
  );
}

export default App;
