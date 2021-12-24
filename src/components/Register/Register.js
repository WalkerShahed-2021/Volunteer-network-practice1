import React from 'react';
import logos from '../../logos/Group 1329.png';
import { useForm } from "react-hook-form";
import './Register.css';


const Register = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    };


    return (
        <div className="App add-service">
           <img className="w-25" src={logos} alt="" />
            <form className="mt-5 box-model" onSubmit={handleSubmit(onSubmit)}>
                <h3>Register as a Volunteer</h3>
                <input  placeholder="Full Name"  {...register("name")} />
                <input  placeholder="User or email" {...register("UserName",)} />
                <input placeholder="Date" type="date" {...register("date")} />
                <textarea placeholder="Desicription" {...register("text")} />
                <input  placeholder="Organize books at the library." {...register("text")} />
                <input className="bg-primary text-white" type="submit" />
            </form>
        </div>
    );
};

export default Register;