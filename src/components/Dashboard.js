import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Container className="mt-4">
      <h2>Dashboard</h2>
      <Row className="mt-3">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Track Your Progress</Card.Title>
              <Card.Text>View your health metrics and progress over time.</Card.Text>
              <Link to="/progress" className="btn btn-primary">View Progress</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Set Your Goals</Card.Title>
              <Card.Text>Define your health goals and stay motivated.</Card.Text>
              <Link to="/goals" className="btn btn-primary">Manage Goals</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Health Tips</Card.Title>
              <Card.Text>Get personalized health tips based on your data.</Card.Text>
              <Link to="/tips" className="btn btn-primary">View Tips</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
