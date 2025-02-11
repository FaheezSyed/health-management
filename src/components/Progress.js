import { Container, Button, Form, Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";


import "bootstrap/dist/css/bootstrap.min.css";

const UpdateProgress = ({ setProgressData }) => {
    const [date, setDate] = useState("");
    const [weight, setWeight] = useState("");
    const [bloodPressure, setBloodPressure] = useState("");
    const [heartRate, setHeartRate] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newEntry = { date, weight, bloodPressure, heartRate };
      setProgressData((prevData) => {
        const updatedData = [...prevData, newEntry];
        localStorage.setItem("progress", JSON.stringify(updatedData));
        return updatedData;
      });
      setDate("");
      setWeight("");
      setBloodPressure("");
      setHeartRate("");
    };
  
    return (
      <Form onSubmit={handleSubmit} className="mt-3">
        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="weight" className="mt-2">
          <Form.Label>Weight (kg)</Form.Label>
          <Form.Control type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="bloodPressure" className="mt-2">
          <Form.Label>Blood Pressure</Form.Label>
          <Form.Control type="text" value={bloodPressure} onChange={(e) => setBloodPressure(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="heartRate" className="mt-2">
          <Form.Label>Heart Rate (bpm)</Form.Label>
          <Form.Control type="number" value={heartRate} onChange={(e) => setHeartRate(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Update Progress
        </Button>
      </Form>
    );
  };
  
  const Progress = () => {
    const [progressData, setProgressData] = useState(() => {
      return JSON.parse(localStorage.getItem("progress")) || [];
    });
  
    useEffect(() => {
      localStorage.setItem("progress", JSON.stringify(progressData));
    }, [progressData]);
  
    return (
      <Container>
        <h2>Progress</h2>
        <p>Track your progress over time.</p>
        <UpdateProgress setProgressData={setProgressData} />
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>Date</th>
              <th>Weight (kg)</th>
              <th>Blood Pressure</th>
              <th>Heart Rate (bpm)</th>
            </tr>
          </thead>
          <tbody>
            {progressData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.weight}</td>
                <td>{entry.bloodPressure}</td>
                <td>{entry.heartRate}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  };
  

export default Progress;
