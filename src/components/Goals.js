
import React, { useState, useEffect } from "react";

import { Container, Form, Button, ListGroup } from "react-bootstrap";

const Goals = () => {
    
    const [goal, setGoal] = useState("");
    const [goals, setGoals] = useState(() => {
      return JSON.parse(localStorage.getItem("goals")) || [];
    });
  
    useEffect(() => {
      localStorage.setItem("goals", JSON.stringify(goals));
    }, [goals]);
  
    const handleAddGoal = (e) => {
      e.preventDefault();
      if (goal.trim()) {
        setGoals([...goals, goal]);
        setGoal("");
      }
    };
  
    return (
      <Container className="mt-4">
        <h2>Health Goals</h2>
        <Form onSubmit={handleAddGoal}>
          <Form.Group controlId="goalInput">
            <Form.Label>Set a New Goal</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your health goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Add Goal
          </Button>
        </Form>
        <ListGroup className="mt-3">
          {goals.map((g, index) => (
            <ListGroup.Item key={index}>{g}</ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    );
  };

 
export default Goals;
