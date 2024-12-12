import React from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DataSources from './pages/DataSources';
import DataTargets from './pages/DataTargets';
import Files from './pages/Files';
import Transformations from './pages/Transformations';
import Jobs from './pages/Jobs';
import Metadata from './pages/Metadata';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/sources" element={<DataSources />} />
              <Route path="/targets" element={<DataTargets />} />
              <Route path="/files" element={<Files />} />
              <Route path="/transformations" element={<Transformations />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/metadata" element={<Metadata />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
