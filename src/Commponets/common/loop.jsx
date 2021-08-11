import React, { Component }from 'react';
import {CardsComp} from './card';
import {connect} from "react-redux";
import {bindActionCreators } from "redux";
import * as BaseAction from "../../Actions/BaseAction";
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
 class Loop extends Component{

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

    componentDidMount() {
       
        this.props.listEstimation()

     }
     
     
    render(){

    

        return(
         

       
            <Container>
            <Row>
               {this.props.estimationData.map((data)=>{
                                return(
                                    
                                    <Col sm={12} sm={4} >
                                        <br></br> 
                                    <CardsComp Tile={data.uniqueid} estAmount={data.estamount} dues={data.dues}/>
                                    </Col>
                                   
                                     
                                )
                            })}
                             
                           </Row>
                           <br></br> 
                  
                                    </Container>   
               
        )
       
    }

    
}


const mapStateToProps = (state) => {
    return {
        buttonLoading: state && state.btnLoading ? state.btnLoading : false,
        estimationData: state && state.estimation ? state.estimation : []
    }
  }
  

const mapDispatchToProps = (dispatch) =>({
    ...bindActionCreators(BaseAction, dispatch)
})
  

export default connect(mapStateToProps, mapDispatchToProps)(Loop) 