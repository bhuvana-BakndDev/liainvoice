import React, { Component } from "react";
import LeftNavBar from './common/leftNavebar'
import {Card, nav} from "react-bootstrap";
import { CardsComp } from "./common/card";

export default class DashBoard extends Component {

  state = {
            email: '',
            password: ''
        }
  
    render() {
        return (
            <div>
               
                <div className="wrapper">

                <LeftNavBar/>
       
                <CardsComp/>
          
    </div>
            </div>
        );
    }
}
