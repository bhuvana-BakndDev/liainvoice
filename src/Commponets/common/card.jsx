import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import LeftNavBar from '../common/leftNavebar';
//class component


export class CardsComp extends Component{

    state = {
        count: 0
    }

    render(){
        return(
           <div>
                       
               <Card style={{ width: '100%' }} className="cardbox">
                   <Card.Body>
                      <Card.Title className="text-left est">Est no:  &nbsp;{this.props.Tile}
                      </Card.Title>
                        <Card.Subtitle className="mb-2 text-left est">
                           <div className="row">
                            <div className="col-md-6">Est Value:
                           </div>
                          <div className="col-md-6">
                            <input className="form-control3" id="email" value={this.props.estAmount}/>
                          </div>
                         </div>
                        </Card.Subtitle>
                        <Card.Text>
                            <div className="row">
                                {this.props.dues ? this.props.dues.map( res =>(
                                    <div className="col-12 col-md-4">
                                        <input className="form-control3 place" placeholder={res.percentage +" | "+ res.term} /> 
                                    </div>
                                )): ''}
                            </div>
                        </Card.Text>
                        <Card.Text><h6 className="cinvoice text-center"><a>Create Invoice</a></h6></Card.Text>
                    </Card.Body>
                </Card>
            </div>
           
      
        )
    }

    
}

