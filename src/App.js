import React from 'react'
import { AddChild } from "./Components/Children/Child/AddChild";
import {ChildList} from "./Components/Children/Children";
import { Home } from "./Components/Views/Pages/Home";
import { Navbar } from "./Components/Views/Layout/Navbar";
import {Routes, Route} from 'react-router-dom';
import { Sanitaires } from "./Components/Sanitaires/Sanitaires";
import { UpdateChild } from "./Components/Children/Child/UpdateChild";
import { AddSanitaire } from "./Components/Sanitaires/Sanitaire/AddSanitaire";
import { UpdateSanitaire } from "./Components/Sanitaires/Sanitaire/UpdateSanitaire";
import { Prestataires } from "./Components/Prestataires/Prestataires";
import { AddPrestataire } from "./Components/Prestataires/Prestataire/AddPrestataire";
import { UpdatePrestataire } from "./Components/Prestataires/Prestataire/UpdatePrestataire";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/list' element={<ChildList />}/>
        <Route path='/list2' element={<Sanitaires />}/>
        <Route path='/sanitaire/add' element={<AddSanitaire />}/>
        <Route path='/sanitaire/:id' element={<UpdateSanitaire />}/>
        <Route path='/child/add' element={<AddChild />}/>
        <Route path='/child/:id' element={<UpdateChild />}/>
        <Route path='/prestataire/add' element={<AddPrestataire/>}/>
        <Route path='/prestataire/:id' element={<UpdatePrestataire />}/>
        <Route path='/prestataire' element={<Prestataires/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
