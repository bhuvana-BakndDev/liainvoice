    import React, {Component} from 'react';
    import {Card} from "react-bootstrap";
    import circle from '../../assets/images/circle.png'

    //class component
    export class Report extends Component{

        state = {
            count: 0
        }

        render(){
            return(
                <div>
              
                

        <section>
                    <Card style={{ width: '100%' }} className="cardbox">
                        <div className="row">
                            <div className="col-md-4"></div>
                        <div className="col-md-5">
                    <img src={circle}  className="img-black"/>
                    </div>
                    </div>
                    <Card.Body>
                        <Card.Title className="text-left nam">Company Name: &nbsp; {this.props.Tile}
                        </Card.Title>
                            <Card.Subtitle className="mb-2 text-left nam">
                            Estimate Amount : {this.props.Subtitle}
                            </Card.Subtitle>
                            <Card.Text className="nam">
                            Overall Invoice Amount: Advance 
                            </Card.Text>
                            <Card.Text className="nam round ">Payment Term:
                                
                            <input type="checkbox" id="checkbox" />
    <label for="checkbox"></label>               
                            </Card.Text>
                      </Card.Body>
                    </Card>
                    </section>
                </div>
            
        
            )
        }

        
    }

