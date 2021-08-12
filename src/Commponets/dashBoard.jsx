import React, { Component } from "react";
import LeftNavBar from './common/leftNavebar';
// import sidebar from './sidebar';

import est from '../assets/images/EstIcon.png';
import inv from '../assets/images/invoice.png';
import proj from '../assets/images/Totproj.png';
import client from '../assets/images/Totclients.png';
import {Card, nav} from "react-bootstrap";
// import { CardsComp } from "./common/card";
import {Col, Row, Container} from 'react-bootstrap';
//for column chart
import ColumnChart from './common/chart';
//for donut chart
import DoughnutChart from './common/donutchart';
//for datepicker
//npm install --save bootstrap-daterangepicker react jquery moment
//npm install --save react-bootstrap-daterangepicker
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

//progress bar
import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class DashBoard extends Component {

  state = {
            email: '',
            password: ''
        }

     
  
    render() {
      const percentage = 73;
        return (
            <div>
               
                <div className="wrapper">

                {/* <Row>

                <Col sm={12} sm={3} >
                    <p> helo</p>
                    </Col>
                    </Row> */}
                    <Row>
                    <Col sm={12} sm={3}>
                        <LeftNavBar/>
                        {/* <sidebar/> */}
                    </Col>
                    <Col sm={12} sm={9} >
                    <Row>

                   
                <Col sm={12} sm={12} >
                <div className="row">
    <div className="col-md-3">
      <a className="text-left"> Monthly </a> &nbsp;
      <a className="text-left"> Querterly </a> &nbsp;
      <a className="text-left"> Yearly </a> 
        </div>
        <div className="col-md-6">
        </div>
        <div className="col-md-3">
        <DateRangePicker>
  <button type="button" className="btn btn-primary">
    click to open
  </button>
</DateRangePicker>
      </div>
        </div>    
        <br></br>             
<div className="row">
    <div className="col-md-3">
        <div className="box">
        <Card style={{ width: '90%' }} className="cardbox">
                <div class="semicircle"><img src={est} width="20px" height="20px"></img></div>
                <br></br>
                   <Card.Body>
                 
                   <Card.Title className="text-centre"> Total Estimated value
                      </Card.Title>
                      
                    <br></br>
                      <Card.Subtitle className=" text-centre ">200000
                      </Card.Subtitle>
                   </Card.Body>
                   <br></br>
                   <div className="row">
                   <div className="col-md-3"></div>
                   <div className="col-md-6 rectangle" > 
                   
                        {/* <div className="progressBar ">
                           <ProgressBar now={percentage} variant="success"/>
                         </div> */}
                         <div class="progress" style={{height: "5px"}}>
                            <div class="progress-bar bg-success" role="progressbar" style={{width: "15%"}}  aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                      
                  </div>
                   <div className="col-md-3"></div>
                    
                   
                  </div>
                 


                </Card>
        </div>
    </div>
    <div className="col-md-3">
        <div className="box">
        <Card style={{ width: '90%' }} className="cardbox">
                <div class="semicircle"><img src={inv} width="20px" height="20px"></img></div>
                <br></br>
                   <Card.Body>
                   <Card.Title className="text-centre"> Total Invoice value
                      </Card.Title>

                    <br></br>
                      <Card.Subtitle className=" text-centre ">200000
                      </Card.Subtitle>
                   </Card.Body>
                   <br></br>
                   <div className="row">
                   <div className="col-md-3"></div>
                   <div className="col-md-6 rectangle" > 
                   
                        {/* <div className="progressBar" style={{height: "0.1px"}}>
                           <ProgressBar now={percentage} style={{width: "95%"}} variant="success"/>
                         </div> */}
                         <div class="progress" style={{height: "5px"}}>
                            <div class="progress-bar bg-success" role="progressbar" style={{width: "55%"}}  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                      
                  </div>
                   <div className="col-md-3"></div>
                    
                   
                  </div>
                </Card>
        </div>
    </div>
    <div className="col-md-3">
        <div className="box">
        <Card style={{ width: '90%' }} className="cardboxblue">
               
               <br></br>
                  
                  <div className="row">
                           <div className="col-md-3"><img src={proj} width="90px" height="90px"></img>
                           </div>
                           <div className="col-md-9"><Card.Body>
                  <Card.Title className="text-right"> Total Projects
                     </Card.Title>
                     <br></br>
                     <Card.Subtitle className=" text-centre ">200000
                     </Card.Subtitle>
                  </Card.Body>
                     </div>
                     </div>
               </Card>
        </div>
    </div>
    <div className="col-md-3">
        <div className="box">
        <Card style={{ width: '90%' }} className="cardboxblue">
                <br></br>
                 
                <div className="row">
                            <div className="col-md-3"><img src={client} width="90px" height="90px"></img>
                            </div>
                            <div className="col-md-9">
                   <Card.Body>
                   <Card.Title className="text-centre"> Total Clients
                      </Card.Title>
                      
                    <br></br>
                      <Card.Subtitle className=" text-centre ">200000
                      </Card.Subtitle>
                   </Card.Body>
                   </div>
                   </div>
                </Card>
        </div>
    </div>

</div>



                    </Col>
                    </Row>
                    <Row>
                    <Col sm={12} sm={9} >
                    <ColumnChart/> 
                    </Col>
                    <Col sm={12} sm={3} >
                    <DoughnutChart/>
                        </Col>
                    </Row>
                    </Col></Row>
                {/* <CardsComp/> */}

                
              
    </div>


            </div>
        );
    }
}


