import React, { useState, useEffect } from "react";
import { Container, Form, Button, ListGroup } from "react-bootstrap";

const UpdateProgress = () => {
  const [progress, setProgress] = useState("");
  const [progressList, setProgressList] = useState(() => {
    return JSON.parse(localStorage.getItem("progress")) || [];
  });

  useEffect(() => {
    localStorage.setItem("progress", JSON.stringify(progressList));
  }, [progressList]);

  const handleAddProgress = (e) => {
    e.preventDefault();
    if (progress.trim()) {
      setProgressList([...progressList, { date: new Date().toLocaleDateString(), progress }]);
      setProgress("");
    }
  };

  return (
    <Container className="mt-4">
      <h2>Update Progress</h2>
      <Form onSubmit={handleAddProgress}>
        <Form.Group controlId="progressInput">
          <Form.Label>Enter Your Progress Update</Form.Label>
          <Form.Control
            type="text"
            placeholder="E.g., Lost 2kg, ran 5km, etc."
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Add Progress
        </Button>
      </Form>
      <ListGroup className="mt-3">
        {progressList.map((entry, index) => (
          <ListGroup.Item key={index}>
            <strong>{entry.date}:</strong> {entry.progress}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default UpdateProgress;