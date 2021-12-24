import React from 'react';
import logos from '../../../../logos/Group 1329.png';
import './Login.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../../Hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';




const LogIn = () => {
    const { singInUsingGoogle} = useAuth();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/register';
    const history = useHistory();

    const handleGoogleLogin = () =>{
        singInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })

    }
    return (
        <div className="App mt-5">
             <div className="login-page container">
                <img className="w-25 mt-5" src={logos} alt="" />
                <div className="page-box">
                    <h2 className="style fw-bold">Login With</h2>
                    <div className="font-style">
                    <h4 className="mt-3" onClick={handleGoogleLogin}><FontAwesomeIcon icon={faCoffee} /> Continue with Google</h4>
                        <h5 className="last-style">Don't have an account? <Link to="/">Create an account</Link></h5>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default LogIn;