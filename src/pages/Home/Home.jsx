import React from "react";
import "./Home.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <Container className="body-container" fluid>
      <Row style={{ backgroundColor: "lightgreen" }}>
        <Col className="d-flex  justify-content-center">
          <h1>EcoLocation</h1>
        </Col>
      </Row>

      <Row className="subtitle">
        <Col className="d-flex  justify-content-center">
          <p>Getting the right funding to the right people</p>
        </Col>
      </Row>
      <Row className="first-paragraph">
        <Col
          md={{ span: 8, offset: 5 }}
          className="d-flex  justify-content-center"
        >
          <p>
            EcoLocation aims to connect organizations, officials, educators, and
            people looking to enter career fields related to supporting
            environmental efforts in order to provide funding, education, and
            growth in those fields.
          </p>
        </Col>
        <Col
          md={{ span: 8, offset: 5 }}
          className="d-flex  justify-content-center"
        >
          <p>
            We provide a platform through which organizations supporting
            environment efforts are able to easily promote their efforts and
            events, as well as providing those working in or entering into these
            career fields with a direct line of connection to organizations and
            educators who can support them.
          </p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-evenly we-provide-row ">
        <div className="d-flex  justify-content-center what-we-provide">
          What We Provide:
        </div>
        <Col md={2} className="border border-dark rounded">
          <div>Student</div>
          <div>
            Can access a catalogue of organizational funding and training
            opportunities to further their careers.
          </div>
        </Col>
        <Col md={2} className="border border-dark rounded">
          <div>Educators:</div>
          <div>
            Can announce training events and connect with others for
            collaborative efforts.
          </div>
        </Col>
        <Col md={2} className="border border-dark rounded">
          <div>Organizations:</div>
          <div>
            Can announce and promote opportunities for student funding and job
            development.
          </div>
        </Col>
        <Col md={2} className="border border-dark rounded">
          <div>Officials:</div>
          <div>
            Can communicate with organizations and educators to discuss which
            important issues need to be addressed.
          </div>
        </Col>
      </Row>
      <Row>
        <div className="d-flex  justify-content-center">
          {" "}
          Join Our Community!
        </div>
      </Row>
      <Row>
        <Col className="d-flex  justify-content-center">
          <Button className="register-button">Register Now</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
