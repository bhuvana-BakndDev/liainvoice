import React, { Component } from "react";
import Logo from '../assets/images/logo.png';
import {connect} from "react-redux";
import {bindActionCreators } from "redux";
import * as BaseAction from "../Actions/BaseAction";

 class Reset extends Component {

  state = {
           
            opassword: '',
            npassword: '',
            cpassword: '',
            errors: {}
        }

    
        
        handleValidation()
        {
            let fields = this.state;
            let errors = {};
            let formIsValid = true;

            //oldpassword
            if(!fields["opassword"]){
               formIsValid = false;
               errors["opassword"] = "Cannot be empty";
            }
      
            //newpassword
            if(!fields["npassword"]){
                formIsValid = false;
                errors["npassword"] = "Cannot be empty";
             }

             //confirmpassword
            if(!fields["cpassword"]){
                formIsValid = false;
                errors["cpassword"] = "Cannot be empty";
             }

             if(fields["npassword"] != fields["cpassword"]){
                formIsValid = false;
                errors["cpassword"] = "Password doen't match";
             }
            

            //console.log(errors)

           this.setState({
                errors
            });

           return formIsValid;
           
       }
        


   onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
   }

   onSubmit = (field, e) => {
    let errorVald = this.handleValidation();
    let x = localStorage.getItem("userid");
    var params= {
        userid : x,
        oldpassword : this.state.opassword,
        newpassword : this.state.npassword,
    };

    if(errorVald){
        this.props.resetpassAction(params)
    }
   }
  
    render() {
        return (
         <div>
                {/* name="login_with_props"/ */}
                <section className="inner" >
                <div className="container">
                 <div className="row justify-content-center">
                   <div className="col-12 col-md-4 col-md-4">
                            <h3><img src={Logo} width="200px" height="70px"></img></h3>
                                          <br></br>
                      <h4 className="text-center">Create New Password</h4>
                      <br></br>
                      <div className="form-group">
                               
                            <input type="text"  
                                 id="opassword" 
                                 className="form-control2" 
                                 value={this.state.opassword} 
                                 placeholder="Old Password"  
                                 onChange={this.onChange} />
                         {this.state.errors ?  <span style={{color: 'red'}}>{this.state.errors.opassword}</span> : ''}
                    </div>
                     <br></br>
                          
                    <div className="form-group">
                               
                            <input type="password" 
                             id="npassword" 
                             className="form-control2" 
                             value={this.state.npassword} 
                             placeholder="New Password"  
                             onChange={this.onChange} />
                        {this.state.errors ?  <span style={{color: 'red'}}>{this.state.errors.npassword}</span> : ''}
                    </div>

                    <br></br>

                    <div className="form-group">
                               
                        <input type="password"  
                        id="cpassword" className="form-control2" 
                        value={this.state.cpassword} 
                        placeholder="Confirm Password"  
                        onChange={this.onChange} />
                        {this.state.errors ?  <span style={{color: 'red'}}>{this.state.errors.cpassword}</span> : ''}
                    </div>

                           <br></br>
                            <button onClick={this.onSubmit}  className="btn-sign">Reset Password</button>
                            {this.props.buttonLoading ? <span style={{color: 'blue'}}>loading</span>:""} 
                            
                        <div>
                        </div>
                   </div>
                   </div>
                   </div>
              </section>
                         </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
      buttonLoading: state && state.btnLoading ? state.btnLoading : false,
    }
  }
  

const mapDispatchToProps = (dispatch) =>({
    ...bindActionCreators(BaseAction, dispatch)
})
  

export default connect(mapStateToProps, mapDispatchToProps)(Reset) 