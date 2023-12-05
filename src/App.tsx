import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageContainer from './containers/PageContainer';
import LeafletMap from './components/Map'; // Import your LeafletMap component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageContainer><LeafletMap /></PageContainer>} />
      </Routes>
    </Router>
  );
}

export default App;
