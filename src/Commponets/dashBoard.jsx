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

      

        return (
            
               
                <div className="wrapper">

                {/* <Row>

                <Col sm={12} sm={3} >
                    <p> helo</p>
                    </Col>
                    </Row> */}
                   <Containter-fluid>
          <Row>
           <Col sm={12} lg={3}>
             <LeftNavBar/>
                {/* <sidebar/> */}
            </Col>
            <Col sm={12} lg={9} >
          <Row>

          <Col sm={12} sm={12} >
           <div className="row">
              <div className="col-md-4">
                <a className="text-left"> Monthly </a> &nbsp;
                <a className="text-left"> Querterly </a> &nbsp;
                <a className="text-left"> Yearly </a> 
                  </div>
                  <div className="col-md-5">
                  </div>
                  <div className="col-md-3">
                  <DateRangePicker>
                   {/* <button type="button" className="btn btn-primary">
                   click to open
                  </button> */}
                    <input type="text" className="form-control2" />
                  </DateRangePicker>
             </div>
        </div>    
        <br></br>  
        <br></br>             
           
        <div className="row">
            <div className="col-lg-3 col-sm-4 col-md-3">
                {/* <div className="box"> */}
                    <Card  className="cardbox">
                            <div class="semicircle"><img src={est} width="20px" height="20px"></img></div>
                            <br></br>
                              <Card.Body>
                            
                              <Card.Title className="text-center cardtitle"> Total Estimated value
                                  </Card.Title>
                                  
                             
                                  <Card.Subtitle className=" text-center cardvalue">200000
                                  </Card.Subtitle>
                              </Card.Body>
                              
                              <div className="row">
                              <div className="col-md-6 cardcompletevalue">10000</div>
                       
                              <div className="col-md-6 cardbalvalue">2000</div>
                              </div>
                              <div className="row">
                              <div className="col-md-3"></div>
                              <div className="col-md-6 rectangle" > 
                              
                                    {/* <div className="progressBar ">
                                      <ProgressBar now={percentage} variant="success"/>
                                    </div> */}
                                    <div class="progress" style={{height: "5px"}}>
                                        <div class="progress-bar " role="progressbar" style={{width: "85%",backgroundColor: "#51F372"}}  aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                  
                              </div>
                              <div className="col-md-3"></div>
                                
                              
                              </div>
                            


                          </Card>
                {/* </div> */}
            </div>
                <div className="col-lg-3 col-sm-4 col-md-3">
                    {/* <div className="box"> */}
                    <Card  className="cardbox">
                            <div class="semicircle"><img src={inv} width="20px" height="20px"></img></div>
                            <br></br>
                              <Card.Body>
                              <Card.Title className="text-center cardtitle"> Total Invoice value
                                  </Card.Title>

                           
                                  <Card.Subtitle className=" text-center cardvalue">200000
                                  </Card.Subtitle>
                              </Card.Body>
                            
                              <div className="row">
                              <div className="col-md-6 cardcompletevalue">10000</div>
                              <div className="col-md-6 cardbalvalue">2000</div>
                              </div>

                              <div className="row">
                              <div className="col-md-3"></div>
                              <div className="col-md-6 rectangle" > 
                              
                                    {/* <div className="progressBar" style={{height: "5px"}}>
                                      <ProgressBar now="30%" style={{width: "75%"}} variant="success"/>
                                    </div> */}
                                    <div class="progress" style={{height: "5px"}}>
                                        <div class="progress-bar" style={{width: "55%",backgroundColor: "#51F372"}}  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                  
                              </div>
                              <div className="col-md-3"></div>
                                
                              
                              </div>
                            </Card>
                    {/* </div> */}
                </div>
                <div className="col-lg-3 col-sm-4 col-md-3">
                    {/* <div className="box"> */}
                    <Card  className="cardboxblue">
                          
                          <br></br>

                              
                              <div className="row">
                                      <div className="col-md-3"><img src={proj} width="90px" height="90px"></img>
                                      </div>
                                      <div className="col-md-9"><Card.Body>
                              <Card.Title className="text-center cardtitle"> Total Projects
                                </Card.Title>
                             
                                <Card.Subtitle className=" text-center cardvalue ">200000
                                </Card.Subtitle>
                                <br></br>
                              </Card.Body>
                                </div>
                                </div>

                          </Card>
                    {/* </div> */}
                </div>
                <div className="col-lg-3 col-sm-4 col-md-3">
                    <div className="box">
                    <Card  className="cardboxblue">
                            <br></br>
                            
                            <div className="row">
                                        <div className="col-md-3"><img src={client} width="90px" height="90px"></img>
                                        </div>
                                        <div className="col-md-9">
                              <Card.Body>
                              <Card.Title className="text-center cardtitle"> Total Clients
                                  </Card.Title>
                                  
                             
                                  <Card.Subtitle className=" text-center cardvalue">200000
                                  </Card.Subtitle>
                                  <br></br>
                              </Card.Body>
                              </div>
                              </div>
                            </Card>
                    </div>
                </div>

          </div>

          <br></br>             


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
            </Col>
          </Row>
                {/* <CardsComp/> */}

                
                </Containter-fluid>    
    </div>


       
        );
    }
}


