import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LeafletMap from './components/Map'
import NavBar from './components/NavBar'

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <NavBar />
                            <LeafletMap />
                        </>
                    }
                />
            </Routes>
        </Router>
    )
}

export default App
