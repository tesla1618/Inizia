import React from 'react'
import Navbar from './Navbar'
import '../css/page.css';
import '../css/style.css';
import '../css/LoginPage.css';
import Layout from './Layout';
import { Link } from 'react-router-dom';
import { useRef, useState , useEffect} from 'react';

const Login = () => {
    const useRef = useRef();
    const errRef = useRef();

    const [ username , setusername] = useState('');
    const [ password , setpassword] = useState('');
    const [ errMsg , seterrMsg] = useState('');
    const [ success , setSuccess] = useState('false');

    useEffect(() => {
        useRef.current.focus();

    }, [])

    useEffect(() => {
        seterrMsg('');

    }, [username,password])

    const handleSubmit = async (e) =>
    e.preventDefault();
    console.log(username, password);
    setusername('');
    setpassword('');
    setSuccess(true);

    
}
function LoginPage() {
  return (
    <>
        <Layout>
    <div className='container mt-5 login-pc-block'>
        <div className="row">
            <div className="col-md-5 col-12">
                <img src="/assets/images/login-banner.png" alt="" width="500"/>
            </div>
            <div className="col-md-5 col-12 pcontainer login-pc-v">
                <form className="login-form"  onSubmit={handleSubmit}>
                    <div class="info-box" role="alert">
                        Welcome back! Please enter your credentials to log in.
                    </div>
                    <input type="text" className="login-field" placeholder="Username" />
                    <input type="password" className="login-field" placeholder="Password" />
                    <button type="submit" className="login-button">Login</button>
                </form>
                <div className="text-white mt-4">
                    New to SeatFinder? <Link className='text-white' to="/signup">Create an account</Link>
                </div>
            </div>
        </div>
      
    </div>

    <div className='mbl-container login-mbl-block'>

        <div className="pcontainer login-pc-v">
            <form className="login-form" >
                <div class="info-box" role="alert">
                    Welcome back! Please enter your credentials to log in.
                </div>
                <input type="text" className="login-field" placeholder="Username" />
                <input type="password" className="login-field" placeholder="Password" />
                <button type="submit" className="login-button">Login</button>
            </form>
            <div className="text-white mt-4">
                New to SeatFinder? <Link className='text-white' to="/signup">Create an account</Link>
            </div>
        </div>

    </div>
    </Layout>
    
    </>
  )
}

export default LoginPage
