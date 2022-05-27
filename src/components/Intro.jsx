import { Col, Container, Row, Button } from "react-bootstrap";
import React from "react";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">Nonton Anime Gratis</div>
            <div className="title">Sub Indonesia</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark">More Anime</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
