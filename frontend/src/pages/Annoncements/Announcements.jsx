import React, { useState } from "react";
import { Container, Row, Col, Form, Modal, Button } from "react-bootstrap";

function Announcements() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 2, offset: 3 }}>
            <div>Announcements</div>
          </Col>
          <Col md="auto">
            <div>Sort News By Type:</div>
          </Col>
          <Col md="auto">
            <Form>
              <Form.Select aria-label="Default select example">
                <option>All</option>
                <option value="1">Electricial</option>
                <option value="2">Construction</option>
              </Form.Select>
            </Form>
          </Col>
          <Col>
            <Button variant="primary" onClick={handleShow}>
              New Post
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>New Post</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      id="title"
                      type="text"
                      name="title"
                      placeholder="Title"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Write about Post</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Post
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Announcements;
