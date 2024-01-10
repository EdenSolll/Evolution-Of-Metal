import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import MapComponent from './components/Map'
import { SongProvider } from './components/songContext';

const App: React.FC = () => {
   return (
       <Router>
           <Routes>
               <Route
                  path="/"
                  element={
                      <>
                          <NavBar />
                              <MapComponent />
                      </>
                  }
               />
           </Routes>
       </Router>
   )
}

export default App
