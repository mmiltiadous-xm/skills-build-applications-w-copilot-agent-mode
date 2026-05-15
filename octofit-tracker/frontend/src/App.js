
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import octofitLogo from './octofitapp-small.png';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <img src={octofitLogo} alt="OctoFit Logo" className="octofit-logo me-2" />
            OctoFit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/activities"><i className="bi bi-list-task"></i> Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard"><i className="bi bi-trophy"></i> Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams"><i className="bi bi-people"></i> Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users"><i className="bi bi-person"></i> Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts"><i className="bi bi-bicycle"></i> Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<div className="p-5 mb-4 bg-light rounded-3 shadow"><h2 className="display-5 fw-bold">Welcome to OctoFit Tracker!</h2><p className="lead">Track your fitness, join teams, and compete on the leaderboard.</p></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
