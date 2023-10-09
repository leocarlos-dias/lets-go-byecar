import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { useTheme } from './hooks/useTheme';

const App: React.FC = () => {
  const { darkMode } = useTheme();

  const mainStyles = darkMode 
    ? 'bg-gray-800 text-gray-300' 
    : 'bg-yellow-100 text-gray-800';

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className={`${mainStyles} flex flex-grow py-4 flex-col`}>
          <Routes>
            <Route path="/" element={<Main page={1} />} />
            <Route path="/page2" element={<Main page={2} />} />
            <Route path="/page3" element={<Main page={3} />} />
            <Route path="/page4" element={<Main page={4} />} />
            <Route path="*" element={<Main page={5} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;