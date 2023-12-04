import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PageContainer from './containers/PageContainer';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={() => (
            <PageContainer>
              <Home />
            </PageContainer>
          )}
        />
        <Route
          path="/home"
          element={() => (
            <PageContainer>
              <Home />
            </PageContainer>
          )}
        />
        <Route
          path="*"
          element={() => (
            <PageContainer>
              <NotFound />
            </PageContainer>
          )}
        />
      </Routes>
    </Router>
  );
};

export default App;
