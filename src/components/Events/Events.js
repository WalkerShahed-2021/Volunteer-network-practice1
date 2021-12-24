import React from 'react';
import logo from '../../logos/Group 1329.png';
import men from '../../logos/users-alt 1.png';
import plus from '../../logos/plus 1.png';
import uplod from '../../logos/cloud-upload-outline 1.png';

import './Events.css';

const Events = () => {
    return (
        <div className="grid-container">
        <div className=" mx-5 mt-5">
           <img className="w-100" src={logo} alt="" />
           <h4 className='mt-5'> <img src={men} alt="" /> Volunteer register list</h4>
           <h4 className="mt-4"> <img src={plus} alt="" />  Add event</h4>
        </div>
        <div className="mt-5 fw-bold">
           <h4>Add event</h4>
           <div className="box-container">
               <div className="event-container">
                 <div>
                 <h4>Event Title</h4>
                   <input type="text" placeholder='Enter title' /> 
                   <br />
                    <h4>Description</h4>
                    <input style={{height: '80px',}} type="text"  placeholder='description'/>
                 </div>
                   <div className='mx-4'>
                   <h4>Event date</h4>
                    <input type="Date" /> <br />
                    <button className='mt-4 mx-4'> <img className='w-25' src={uplod} alt="" /> uplod img</button>
                   </div>
                   <div className='mt-4 px-2'>
                      <button className="btn btn-primary">Submit</button>
                   </div>
               </div>
           </div>
        </div>
     </div>
    );
};

export default Events;