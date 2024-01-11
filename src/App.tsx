import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import MapComponent from './components/Map'
import { TrackProvider } from './components/TrackContext'

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                      <TrackProvider>
                        <>
                            <NavBar />
                            <MapComponent />
                        </>
                        </TrackProvider>
                    }
                />
            </Routes>
        </Router>
    )
}

export default App
