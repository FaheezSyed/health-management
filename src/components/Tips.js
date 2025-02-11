import React from "react";
import { Container, ListGroup } from "react-bootstrap";

const Tips = () => {
  const healthTips = [
    "Stay hydrated by drinking at least 8 glasses of water a day.",
    "Exercise for at least 30 minutes daily to maintain a healthy lifestyle.",
    "Eat a balanced diet with plenty of fruits and vegetables.",
    "Get at least 7-8 hours of sleep each night.",
    "Reduce stress through meditation, yoga, or deep breathing exercises.",
    "Limit sugar and processed food intake to maintain overall health.",
  ];

  return (
    <Container className="mt-4">
      <h2>Health Tips</h2>
      <ListGroup className="mt-3">
        {healthTips.map((tip, index) => (
          <ListGroup.Item key={index}>{tip}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Tips;
