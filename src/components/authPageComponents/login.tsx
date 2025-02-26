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
        <div className="login-container  py-10 ">
            
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <div>
                <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="rounded-[20px] h-[50px] text-black border-[#d0d5dd]"
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
                        className="rounded-[20px] h-[50px] text-black border-[#d0d5dd]"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button  type="submit">Login</button>
            </form>

            <section className='flex justify-between pt-2 '>
                <div>
                    <label className='flex gap-2 justify-start w-max text-nowrap' htmlFor="remember">
                    <input type="checkbox" name="remember" id="" />
                    Remember for 30 days
                    </label>
                </div>

                <button onClick={()=>{
                    setContent("forgot password")
                }} className='font-semibold bg-transparent p-0 text-black'>Forgot Password</button>


            </section>
        </div>
    );
};

export default Login;