import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './layout/Dashboard';
import VesselActivity from './pages/VesselActivity/VesselActivity';
import VesselActivityDetail from './pages/VesselActivity/Detail/VesselActivityDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<VesselActivity />} />
          <Route path="/vessel-activity" element={<VesselActivity />} />
          <Route
            path="/vessel-activity/:username"
            element={<VesselActivityDetail />}
          />
          <Route path="*" element={<VesselActivity />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
