import React from "react";
import { Card, Button } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div className="container">
      <h2>Dashboard</h2>
      <div className="row">
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>Full Stack Web Development</Card.Title>
              <Card.Text>Learn to develop full stack applications.</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
