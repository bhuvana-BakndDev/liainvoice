import React from "react";
import Logo from '../assets/images/logo.png';
import {connect} from "react-redux";
import {bindActionCreators } from "redux";
import * as BaseAction from "../Actions/BaseAction";


class Login extends React.Component {

    state = {
            email: '',
            password: '',
            errors: {}
        }

        handleValidation()
        {
            let fields = this.state;
            let errors = {};
            let formIsValid = true;

           
            //Email
            if(!fields["email"]){
               formIsValid = false;
               errors["email"] = "Cannot be empty";
            }
      

            if(typeof fields["email"] !== "undefined"){
               let lastAtPos = fields["email"].lastIndexOf('@');
               let lastDotPos = fields["email"].lastIndexOf('.');

               if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                  formIsValid = false;
                  errors["email"] = "Email is not valid";
                }
           }  

            //password
            if(!fields["password"]){
                formIsValid = false;
                errors["password"] = "Cannot be empty";
             }

             //password
       

            console.log(errors)

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
    if(errorVald){
        this.props.loginAction(this.state)
    }
   }
  
    render() {
        return (
         <div>
            <section className="inner" >
                <div className="container">
                 <div className="row justify-content-center">
                   <div className="col-12 col-md-4 col-md-4">
                            <h3><img src={Logo} width="200px" height="70px"></img></h3>
                            <br></br>
                            <div className="form group form-padd ">
                                <input 
                                    className="form-control2" 
                                    id="email" 
                                    value={this.state.email} 
                                    placeholder="Email Address" 
                                    onChange={this.onChange} 
                                />
                                   {this.state.errors ?  <span style={{color: 'red'}}>{this.state.errors.email}</span> : ''}
                            </div>
                            <div className="form group form-padd">
                                <input 
                                    type="password"  
                                    id="password" 
                                    className="form-control2" 
                                    value={this.state.password} 
                                    placeholder="Password"  
                                    onChange={this.onChange} 
                                />
                                   {this.state.errors ?  <span style={{color: 'red'}}>{this.state.errors.password}</span> : ''}
                            </div>

                           <br></br>
                            <button onClick={this.onSubmit}  className="btn-sign">Sign in</button>
                            {this.props.buttonLoading ? <span style={{color: 'blue'}}>loading</span>:""}
                            <p className="space text-center">
                                 <a href="/reset  " className="forgot-password">Forget Password ?</a>
                            </p>

                            <p className="text-center">If you don’t have account ? <a href="/signup" className="signup">Signup </a></p>
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
  

export default connect(mapStateToProps, mapDispatchToProps)(Login) 