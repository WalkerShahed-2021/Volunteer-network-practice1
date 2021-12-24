import React from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../logos/Group 1329.png';
import './Header.css';

const Header = () => {
    const {user, LogOut} = useAuth();
   const activeStyle = {
        fontWeight: "bold",
        color: "red",
   };
 const history = useHistory();

 const handleClick = () => {
     history.push('/register');
 }

    return (
        <div>
            <nav class="navbar navbar-expand-lg container mt-2">
                <div class="container-fluid">
                    <img className='w-25' src={logo} alt="" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <div class="navbar-nav ms-auto fw-bold">
                            <NavLink style={{marginRight: "10px", textDecoration: 'none'}} activeStyle={activeStyle} to="/home">Home</NavLink>
                            <NavLink style={{marginRight: "10px", textDecoration: 'none'}} activeStyle={activeStyle} to="/donation">Donation</NavLink>
                            <NavLink style={{marginRight: "10px", textDecoration: 'none'}} activeStyle={activeStyle} to="/events">Events</NavLink>
                            <NavLink style={{marginRight: "10px", textDecoration: 'none'}} activeStyle={activeStyle} to="blog">Blog</NavLink>
                            {user.email && <span className="text-danger"><button className="btn btn-danger" onClick={LogOut}>Sign Out</button> {user.displayName}</span>}
                            <li class="nav-item mx-3">
                                <button onClick={handleClick}  type="button" class="btn btn-primary">Register</button> 
                            </li>
                            <li class="nav-item">
                                <button type="button" class="btn btn-dark">Admin</button>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='mt-5 text-center'>
                <h1 className='fw-bold'>I GROW BY HELPING PREOPLE IN NEED</h1>
                <div className='mt-3'>
                    <input className='input-costomaiz' type="text" placeholder='Search...' />
                    <button type="button" class="btn btn-primary">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;