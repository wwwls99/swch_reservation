import React from "react";

// reactstrap components
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Col,
    Row,
    UncontrolledTooltip,
    CardBody,
  } from "reactstrap";
  
  import {useState} from "react";
  import DatePicker from 'react-datepicker';
  import "react-datepicker/dist/react-datepicker.css";
  import Dropdown from 'react-bootstrap/Dropdown'
//   import Datepicker from "views/examples/Datepicker"

// core components
import Header from "components/Headers/Header.js";
<Header/>

const Datepicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );
};

const Reservation = () => {
    return(
    <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8 r"></div>
        <Container className="mt--7" fluid>
            <Row>
            <div className="col">
                <Card className="shadow">
                <CardHeader className="border-0">
                    <h3 className="blockquote text-center">희망 예약 시간을 선택해주세요.</h3>
                </CardHeader>
                <CardBody>
                <div className="col mb-3" style={{textAlign: "center"}}>예약 날짜 <Datepicker /></div>
                <div className="col" style={{textAlign: "center"}}>
                {/* 대여시간 start*/}
                <Dropdown className="mr-2 ml-2">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    대여시간
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                {/* 대여시간 end*/}
                {/* 반납시간 start*/}
                <Dropdown className="mr-2 ml-2">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    반납시간
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                {/* 반납시간 end*/}
                </div>
                </CardBody>
                
                
                </Card>
            </div>
            </Row>
        </Container>
    </>
    );
    
};




export default Reservation;