import React, { useState } from "react";
import "./Home.css";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import IMG from "../../images/logo.png";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container className="body-container" fluid>
        <Row style={{ backgroundColor: "rgba(182, 215, 168, 255)" }}>
          <Col className="d-flex  justify-content-center">
            <h1 className="title">EcoLocation</h1>
          </Col>
        </Row>

        <Row className="subtitle">
          <Col className="d-flex  justify-content-center">
            <p>Getting the right funding to the right people</p>
          </Col>
        </Row>
        <Row className="first-paragraph">
          <Col
            md={{ span: 12, offset: 2 }}
            className="d-flex  justify-content-center"
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "35px",
                fontFamily: "EB Garamond', serif",
              }}
            >
              EcoLocation aims to connect organizations, officials, educators,
              and people looking to enter career fields related to supporting
              environmental efforts in order to provide funding, education, and
              growth in those fields.
            </p>
          </Col>
          <Col
            md={{ span: 12, offset: 2 }}
            className="d-flex  justify-content-center"
          >
            <p style={{ fontSize: "35px" }}>
              We provide a platform through which organizations supporting
              environment efforts are able to easily promote their efforts and
              events, as well as providing those working in or entering into
              these career fields with a direct line of connection to
              organizations and educators who can support them.
            </p>
          </Col>
        </Row>
        <Row
          className="d-flex justify-content-evenly we-provide-row "
          style={{ backgroundColor: "rgba(7, 55, 99, 255)" }}
        >
          <div className="d-flex  justify-content-center what-we-provide">
            What We Provide:
          </div>
          <Col
            md={2}
            className="border border-dark rounded"
            style={{ backgroundColor: "rgba(153, 153, 153, 255)" }}
          >
            <div style={{ fontSize: "25px", fontWeight: "500" }}>Students:</div>
            <div>
              Can access a catalogue of organizational funding and training
              opportunities to further their careers.
            </div>
          </Col>
          <Col
            md={2}
            className="border border-dark rounded"
            style={{ backgroundColor: "rgba(153, 153, 153, 255)" }}
          >
            <div style={{ fontSize: "25px", fontWeight: "500" }}>
              Educators:
            </div>
            <div>
              Can announce training events and connect with others for
              collaborative efforts.
            </div>
          </Col>
          <Col
            md={2}
            className="border border-dark rounded"
            style={{ backgroundColor: "rgba(153, 153, 153, 255)" }}
          >
            <div style={{ fontSize: "25px", fontWeight: "500" }}>
              Organizations:
            </div>
            <div>
              Can announce and promote opportunities for student funding and job
              development.
            </div>
          </Col>
          <Col
            md={2}
            className="border border-dark rounded"
            style={{ backgroundColor: "rgba(153, 153, 153, 255)" }}
          >
            <div style={{ fontSize: "25px", fontWeight: "500" }}>
              Officials:
            </div>
            <div>
              Can communicate with organizations and educators to discuss which
              important issues need to be addressed.
            </div>
          </Col>
        </Row>
        <Row>
          <div
            className="d-flex  justify-content-center join-our-community"
            style={{ backgroundColor: "rgba(106, 168, 80, 255)" }}
          >
            {" "}
            Join Our Community!
          </div>
        </Row>
        <Row
          style={{
            backgroundColor: "rgba(106, 168, 80, 255)",
            paddingBottom: "45px",
          }}
        >
          <Col className="d-flex  justify-content-center">
            <Button
              style={{
                backgroundColor: "rgba(255, 229, 153, 255",
                color: "black",
                borderColor: "black",
                padding: "5px 80px",
              }}
              onClick={handleShow}
            >
              Register Now
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Register Now!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                  >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      id="firstname"
                      type="text"
                      name="firstname"
                      placeholder="Last Name"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput3"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      id="emal"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput4"
                  >
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      id="username"
                      type="text"
                      name="username"
                      placeholder="Username"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      id="password"
                      name="password"
                      type="password"
                      placeholder="PassWord1234@"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">Student</option>
                    <option value="2">Educators</option>
                    <option value="3">Organizations</option>
                    <option value="4">Officials</option>
                  </Form.Select>
                  <Form.Select aria-label="Default select example">
                    <option>All</option>
                    <option value="1">Electricial</option>
                    <option value="2">Construction</option>
                  </Form.Select>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Submit
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
