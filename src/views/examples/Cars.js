
// reactstrap components

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

const Cars = () => {
    return (
      <>
      
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8 r">  
      </div>
      <Container className="mt--7" fluid>
        <Card className="shadow">
        
        
        <CardHeader className="border-0">
        
          <h3 className="thead-light blockquote text-center">
          예약할 차량을 선택해주세요
          </h3>
        </CardHeader>
        <CardBody>
        <Row className="mt-3 ml-5" >
            <Col>
            <Button >
            <div style={{ height: "100%",width: "100%" }}>
            <Card className="card-stats mb-4 mb-lg-0">
              <CardBody>            
                  <div className="col" >
                    <CardTitle className="text-uppercase text-muted mb-0">
                      1번
                    </CardTitle>
                    
                      <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                <i className="fas fa-chart-bar" />
                    
                      </div>
                      <div className="h2 font-weight-bold mb-0">00하 0000</div>
                  </div>                     
              </CardBody>
            </Card>       
          </div>
            </Button>
            </Col>

        <Col >
            <Button>
            <div style={{ height: "100%",width: "100%" }}>
                    <Card className="card-stats mb-4 mb-lg-0">
              <CardBody>            
                  <div className="col">
                    <CardTitle className="text-uppercase text-muted mb-0">
                      2번
                    </CardTitle>
                    
                      <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                <i className="fas fa-chart-bar" />
                    
                      </div>
                      <div className="h2 font-weight-bold mb-0">00하 0000</div>
                  </div>                     
              </CardBody>
            </Card>       
          </div>
            </Button>
            </Col>
          <Col >
            <Button>
            <div style={{ height: "100%",width: "100%" }}>
                    <Card className="card-stats mb-4 mb-lg-0">
              <CardBody>            
                  <div className="col">
                    <CardTitle className="text-uppercase text-muted mb-0">
                      1번
                    </CardTitle>
                    
                      <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                <i className="fas fa-chart-bar" />
                    
                      </div>
                      <div className="h2 font-weight-bold mb-0">00하 0000</div>
                  </div>                     
              </CardBody>
            </Card>       
          </div>
            </Button>
            </Col>
           
        </Row>
        </CardBody>
        </Card>
      </Container>
      
    </>
    );
  };
  
  export default Cars;
  