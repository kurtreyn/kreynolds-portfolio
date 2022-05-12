import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Project({ title, description, image, pageLink, codeLink }) {
  return (
    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 project-col">
      <Card className="text-center" bg="dark">
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Img src={image} alt="Card image" />
          <Card.Text>{description}</Card.Text>
          <Button className="btn btn-project">Project</Button>
          <Button className="btn btn-code">Code</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Project;
