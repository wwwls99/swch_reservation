

import React from "react";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    Row,
    Container
      
  } from "reactstrap";
  


const init = () => {
    return (
      <>
      
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8 r">  
      </div>
      <Container className="mt--7" fluid>
      <Row className = "mt-4">
      <Col >
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-4 mb-4">
              <h2>환영합니다</h2>
            </div>
            </CardHeader>
        </Card>
        </Col>
      
        </Row>
        <Row className = "mt-4">
      <Col >
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-4 mb-4">
              <h2>예약하기</h2>
            </div>
            </CardHeader>
        </Card>
        </Col>
      
        </Row>
        <Row className = "mt-4">
      <Col >
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-4 mb-4">
              <h2>나의 예약 내역</h2>
            </div>
            </CardHeader>
        </Card>
        </Col>
      
        </Row>
      </Container>
    </>
    );
  };
  
  export default init;