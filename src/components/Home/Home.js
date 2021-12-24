import React from 'react';
import Header from './Header/Header';
import './Home.css'
import ShowUser from './ShowUser/ShowUser';

const Home = () => {
    const Users = [
        {name: 'Child Support', color1: 'red', id: 1, img: 'https://i.ibb.co/Jk18hhm/animal-Shelter.png'},
        {name: 'Child Support', color1: 'rgb(83, 83, 175)', id: 2, img: 'https://i.ibb.co/84SLBNv/babySit.png'},
        {name: 'Child Support', color1: 'tomato', id: 11, img: 'https://i.ibb.co/Jk18hhm/animal-Shelter.png'},
        {name: 'Child Support', color1: 'green', id: 12, img: 'https://i.ibb.co/84SLBNv/babySit.png'},
        {name: 'Child Support', color1: 'red', id: 3, img: 'https://i.ibb.co/GPYgK2z/bird-House.png'},
        {name: 'Child Support', color1: 'tomato', id: 4, img: 'https://i.ibb.co/D8jJg1m/child-Support.png'},
        {name: 'Child Support', color1: 'rgb(83, 83, 175)', id: 5, img: 'https://i.ibb.co/Jk18hhm/animal-Shelter.png'},
        {name: 'Child Support', color1: 'green', id: 6, img: 'https://i.ibb.co/Jk18hhm/animal-Shelter.png'},
        {name: 'Child Support', color1: 'tomato', id: 7, img: 'https://i.ibb.co/Jk18hhm/animal-Shelter.png'},
        {name: 'Child Support', color1: 'black', id: 8, img: 'https://i.ibb.co/Jk18hhm/animal-Shelter.png'},
        {name: 'Child Support', color1: 'rgb(83, 83, 175)', id: 9, img: 'https://i.ibb.co/Jk18hhm/animal-Shelter.png'},
        {name: 'Child Support', color1: 'green', id: 10, img: 'https://i.ibb.co/Jk18hhm/animal-Shelter.png'},
    ]
    return (
        <div>
            <Header></Header>
         <div className='row mt-5'>
           
            {
                Users.map(user => <ShowUser 
                key={user.id}
                user={user}
                ></ShowUser>)
            }
         </div>
         </div>
    );
};

export default Home;