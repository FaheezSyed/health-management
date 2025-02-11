import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Goals from "./components/Goals";
import Progress from "./components/Progress";


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };
  const Tips = () => {
    return (
      <Container>
        <h2>Health Tips</h2>
        <ul>
          <li>Stay hydrated and drink plenty of water.</li>
          <li>Exercise regularly to maintain a healthy lifestyle.</li>
          <li>Eat a balanced diet rich in fruits and vegetables.</li>
          <li>Get enough sleep to ensure proper recovery.</li>
          <li>Monitor your stress levels and practice relaxation techniques.</li>
        </ul>
      </Container>
    );
  };

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
        <Button variant="outline-light" onClick={() => window.history.back()} className="me-2">Back</Button>
          <Navbar.Brand href="/">Health Monitoring</Navbar.Brand>
          <Nav className="ms-auto">
            {isAuthenticated ? (
              <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/goals" element={isAuthenticated ? <Goals /> : <Navigate to="/login" />} />
          <Route path="/progress" element={isAuthenticated ? <Progress /> : <Navigate to="/login" />} />
          <Route path="/tips" element={isAuthenticated ? <Tips /> : <Navigate to="/login" />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
