import React from "react";
import { Col, Row, Container } from "../components/Grid";
import "./notfound.css"


function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
            <h1 className="text-white text-center notFound">404 Page Not Found</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
