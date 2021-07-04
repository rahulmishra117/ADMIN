import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row,Container,Col, Card, CardDeck, Button, Tab, Tabs } from "react-bootstrap";

function Request() {
  return (
    <div>
      <br></br>
      <br></br>
      <Card>
        <Card.Body>
          <Card.Text>
            <Container>
              <Row>
                <Col>AmitKumar@123.com</Col>
                <Col>AmitKumar</Col>
              </Row>
            </Container>
          </Card.Text>
          <Button className="button-val" variant="outline-primary">
            ACCEPT
          </Button>
          <Button className="button-val" variant="outline-danger">
            DECLINE
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Request;
