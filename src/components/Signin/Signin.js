import React from 'react';

class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            signinPassword: '',
            signinEmail: '',
            formError: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signinEmail: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({signinPassword: event.target.value});
    }

    onSignin = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.signinEmail,
                password: this.state.signinPassword
            })
        }).then(resp => resp.json())
        .then(user => {
            if(user.id){
                this.props.loadUser(user);
                this.props.routeChange('home')
            }
            else{
                this.setState({formError: 'bg-washed-red'})
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
 
    render(){
        const { routeChange } = this.props;
        return(
        <div className='center flex justify-center items-center pa3'>
            <article className={`br2 shadow-2 ba dark-gray b--black-10 w-100 w-60-m w-30-l mw10`}>
                <main className="pa4 center black-80">
                    <div className="tc">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input 
                        onInput = {this.onEmailChange}
                        className={`b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100`}
                        type="email" 
                        name="email-address"  
                        id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className={`db fw6 lh-copy f6`} htmlFor="password">Password</label>
                        <input 
                        onInput = {this.onPasswordChange}
                        className={`b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100`} 
                        type="password" 
                        name="password"  
                        id="password"/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input 
                    onClick={this.onSignin}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Sign in"/>
                    </div>
                    <div className="lh-copy mt3">
                    <p onClick={() => routeChange('register')} className="f6 pointer link dim black db">Register</p>
                    </div>
                    </div>
                </main>
            </article>
        </div>
    )
    }
}

export default Signin;