import React, { useState, Dispatch, SetStateAction } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";


interface LoginProps{
    content: string;
    setContent: Dispatch<SetStateAction<string>>;
}
const Login: React.FC<LoginProps> = ({setContent}) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-container font-[Inter] py-10 ">
            
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <div>
                <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="rounded-[20px] h-[60px] font-[Inter] md:h-[50px] max-md:w-full text-lg text-black border-[#d0d5dd]"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        placeholder='Enter your password'
                        className="rounded-[20px] h-[60px] font-[Inter] md:h-[50px] text-lg max-md:w-full text-black border-[#d0d5dd]"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button  className='h-[60px] md:h-[50px]' type="submit">Login</button>
            </form>

            <section className='flex justify-between pt-2 '>
                <div>
                    <label className='flex gap-2 justify-start items-center  text-sm  text-nowrap' htmlFor="remember">
                    <input type="checkbox" className='w-fit p-0 m-0' name="remember" id="remember" />
                    Remember for 30 days
                    </label>
                </div>

                <button onClick={()=>{
                    setContent("forgot password")
                }} className='font-semibold bg-transparent p-0 text-sm text-[#262b3a]'>Forgot Password</button>


            </section>

            <div className='w-full mt-4 '>
                <p className='flex items-center text-[#475467] gap-1 justify-center'>Don't have an account? <button onClick={()=>{
                    setContent("signup")
                }}  className='text-[#262b3a] font-semibold bg-transparent p-0'>Sign up</button></p>
            </div>
        </div>
    );
};

export default Login;