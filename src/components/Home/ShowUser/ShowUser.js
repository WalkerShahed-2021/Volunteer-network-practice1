import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import './ShowUser.css'

const ShowUser = (props) => {
    const {name, img, color1} = props.user;
    const {user, singInUsingGoogle} = useFirebase();
    return (
        <div className='col-3'>
           <div  className="container">
                <Link style={{textDecoration: 'none'}} to="/Login">
                    <img className='w-100' src={img} alt=""/>
                    <h2 style={{backgroundColor: color1 , 
                    color: 'white', padding:' 30px',
                    borderRadius: '10px', }} 
                    className=''>
                    {name}</h2>
                </Link>
           </div>
        </div>
    );
};

export default ShowUser;