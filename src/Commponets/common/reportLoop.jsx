import React, {Component} from 'react';
import {Report} from './report';
import {Col, Row, Container} from 'react-bootstrap';


//class component
const dataList = [
    {
        id: 1,
        cardTitle: 'HONDA',
        cardSubTitle: 'Ameze',
        description: 'somthing'
    },
    {
        id: 2,
        cardTitle: 'KIA',
        cardSubTitle: 'Carnival',
        description: 'somthing'
    },
    {
        id: 3,
        cardTitle: 'HUNDAI',
        cardSubTitle: 'i20',
        description: 'somthing'
    },
    {
        id: 4,
        cardTitle: 'TOYOTA',
        cardSubTitle: 'Innova',
        description: 'somthing'
    },
    {
        id: 5,
        cardTitle: 'TATA',
        cardSubTitle: 'Nano',
        description: 'somthing'
    },
]
export default class ReportLoop extends Component{

    state = {
        count: 0
    }

    countInc = () => {
       this.setState({
        count: this.state.count+1 
       })

       console.log(this)
    }

    getBadgeClasses = () => {
        let classes = 'badge m-2 badge-';
        classes =  classes + (this.state.count === 0 ? 'primary' : 'warning')
        console.log(classes)
        return classes;
    }

    getFormatted = () => {
        return this.state.count === 0 ? 'zero' : this.state.count
    }

    render(){
        return(
            
       
            <Container>
                  <section>
                    <h1 className="text-left">Report</h1>
                    <div className="row">
                        <div className="col-md-3">Monthly</div>
                        <div className="col-md-3">Yearly</div>
                        <div className="col-md-3">Monthly</div>
                    </div>
                </section>
            <Row>
               {dataList.map((data)=>{
                                return(
                                    
                                    <Col sm={12} sm={4} >
                                        <br></br>
                                    <Report Tile={data.cardTitle} Subtitle={data.cardSubTitle} Description={data.description}/>
                                    </Col>
                                   
                                     
                                )
                            })}
                             
                           </Row>
                           <br></br> 
                                    </Container>   
               
        )
       
    }

    
}


