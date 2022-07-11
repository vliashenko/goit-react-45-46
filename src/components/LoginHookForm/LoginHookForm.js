import React from 'react';
import { useForm } from "react-hook-form"

const LoginHookForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            login: "hate this day",
            password: 213422
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
            Login
                <input 
                    type="text"
                    {...register("login")}                
                /> 
            </label>

            <label>
            Password
                <input 
                    type="password" 
                    {...register("password", { required: true })}
                /> 
            </label>

            <input type="checkbox" {...register("guarantee")} />

            <button type="submit">Submit</button>
        </form>
    );
};

export default LoginHookForm;