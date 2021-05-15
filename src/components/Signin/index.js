import Button from '../forms/Button'
import './styles.scss'
import glogo from './../../assets/glogo.png';
import flogo from './../../assets/flogo.png';
import tlogo from './../../assets/tlogo.png';
import ylogo from './../../assets/ylogo.png';
import plogo from './../../assets/plogo.jpg';
import signInWithGoogle,{auth} from './../../firebase/utlis';
import React, { Component } from 'react';
import FromInput from './../forms/FormInput';

import AuthWrapper from './../AuthWrapper';
import { Link } from 'react-router-dom';

const initialState = {
    email:'',
    password:''
}

class SignIn extends Component {

    constructor(props){
        super(props);
        this.state = {...initialState};
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = async e =>{
        e.preventDefault();

        const {email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({...initialState});
        }catch(err){
            console.log(err);
        }
    }

    handleChange(e){
        const{name,value} = e.target;
        this.setState({
            [name]:value
            }   
        )
    }
    
    render(){
        const{email,password} = this.state;
        const configAuthWrapper = {
            headline : 'Sign In'
        }
        return(
            <AuthWrapper {...configAuthWrapper}>
                    <div className="formWrap">
                        <form onSubmit={this.handleSubmit}>

                            <FromInput 
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                onChange={this.handleChange}
                            />

                            <FromInput 
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Password"
                                onChange={this.handleChange}
                            />

                            <button className="btn" type="submit">Login</button>

                            <div className="socialSignin">
                                <div className="row">
                                    <Button onClick={signInWithGoogle}>
                                        <img style={{width:"20px",height:"20px"}}src={glogo} alt="Google logo"></img>
                                        &nbsp;   Log in with Google 
                                    </Button>
                                </div>

                                <div className="row">
                                <Button>
                                    <img style={{width:"20px",height:"20px"}}src={flogo} alt="Facebook logo"></img>
                                    &nbsp;    Log in with Facebook
                                 </Button>
                            </div>

                            <div className="row">
                                <Button>
                                    <img style={{width:"20px",height:"20px"}}src={tlogo} alt="Twitter logo"></img>
                                    &nbsp;    Log in with Twitter
                                 </Button>
                            </div>

                            <div className="row">
                                <Button>
                                    <img style={{width:"20px",height:"20px"}}src={ylogo} alt="Yahoo logo"></img>
                                    &nbsp;    Log in with Yahoo
                                 </Button>
                            </div>

                            <div className="row">
                                <Button>
                                    <img style={{width:"20px",height:"20px"}}src={plogo} alt="Play Games logo"></img>
                                    &nbsp;    Log in with Play Games
                                 </Button>
                            </div>

                                <div className="links">
                                    <Link to="/recovery">Forgot Password</Link>
                                </div>
                            </div>
                        </form>
                    </div>
            </AuthWrapper>
        )
    }
    
}

export default SignIn;



/*
const Signin = props =>{
    return(
        <div className="signin">
            <div className="wrap">
                <h2>Sign in</h2>

                <div className="formwrap">
                    <form>
                        <div className="socialSignin">
                            <div className="row">
                                <Button>
                                    <img style={{width:"20px",height:"20px"}}src={glogo} alt="Google logo"></img>
                                     &nbsp;   Log in with Google 
                                 </Button>
                            </div>

                            <div className="row">
                                <Button>
                                    <img style={{width:"20px",height:"20px"}}src={flogo} alt="Facebook logo"></img>
                                    &nbsp;    Log in with Facebook
                                 </Button>
                            </div>

                            <div className="row">
                                <Button>
                                    <img style={{width:"20px",height:"20px"}}src={tlogo} alt="Twitter logo"></img>
                                    &nbsp;    Log in with Twitter
                                 </Button>
                            </div>

                            <div className="row">
                                <Button>
                                    <img style={{width:"20px",height:"20px"}}src={ylogo} alt="Yahoo logo"></img>
                                    &nbsp;    Log in with Yahoo
                                 </Button>
                            </div>

                            <div className="row">
                                <Button>
                                    <img style={{width:"20px",height:"20px"}}src={plogo} alt="Play Games logo"></img>
                                    &nbsp;    Log in with Play Games
                                 </Button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Signin;
*/