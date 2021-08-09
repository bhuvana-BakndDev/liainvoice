import React from 'react';




export class Register extends React.Component{

    constructor(){
        super();
    }

    render(){
        return (
            <div>
                { this.props.Name }
            </div>
        )
    }
    
}

class Login extends React.Component{

    constructor(){
        super();
        this.state={
            Name: "Paaasupathi",
            SecondNmae: 'Ramkumar',
            thirdName: 'Gnanaprakash'
        }
    }

    render(){
        return (
            <div>
                <Register Name={this.state.Name}/>
                <Register Name={this.state.SecondNmae}/>
                <Register Name={'bhuvana'}/>
            </div>
        )
    }

}

export default Login
