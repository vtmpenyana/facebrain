import React from 'react';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            registerEmail: '',
            registerName: '',
            registerPassword: '',
        }
    }

    onNameChange = (event) => {
        this.setState({registerName: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({registerPassword: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({registerEmail: event.target.value});
    }


    onRegister = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.registerEmail,
                name: this.state.registerName,
                password: this.state.registerPassword
            })
        }).then(resp => resp.json())
        .then(user => {
            if(user.id){
                this.props.loadUser(user);
                this.props.routeChange('home')
            }
        })
    }

    render(){
        return(
        <div className='center flex justify-center items-center pa3'>
            <article className="br2 shadow-2 ba dark-gray b--black-10 w-100 w-60-m w-30-l mw10">
                <main className="pa4 center black-80">
                    <div className="tc">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input 
                        onInput = {this.onNameChange}
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="name" 
                        name="name"  
                        id="name"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input 
                        onInput = {this.onEmailChange}
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" 
                        name="email-address"  
                        id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                        onInput = {this.onPasswordChange}
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="password" 
                        name="password"  
                        id="password"/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input 
                    onClick={this.onRegister}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Register"/>
                    </div>
                    <div className="lh-copy mt3">
                    <p onClick={() => this.props.routeChange('signin')} className="f6 pointer link dim black db">Already Have an Account? <br/> Sign In</p>
                    </div>
                    </div>
                </main>
            </article>
        </div>
        )
    }
}

export default Register;