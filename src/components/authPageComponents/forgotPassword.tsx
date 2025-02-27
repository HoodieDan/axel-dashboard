import React, { SetStateAction, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface ForgotPasswordProps{
    content: string;
    setContent: React.Dispatch<SetStateAction<string>>;
}
const ForgotPassword: React.FC<ForgotPasswordProps> = ({setContent, content}) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
      const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setContent("reset password")
        setMessage('If an account with that email exists, you will receive a password reset email shortly.');
    };
{if(content === "forgot password"){


    return (
        <div className="forgot-password-container w-full flex-col items-center flex gap-2">
            <h2 className='text-[30px] font-medium'>Forgot Password?</h2>
            <p className='text-center font-[Inter] text-[#667085]'>We got you. Enter your mail to get a link to <br /> reset your password</p>
            <form className='w-full' onSubmit={handleSubmit}>
                <div className="form-group w-full">
                <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="rounded-[20px] h-[60px] w-full font-[Inter]  md:h-[50px] text-black border-[#d0d5dd]"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            />
                </div>
                <div className='flex gap-4 font-[Inter] pt-4'>
                <button onClick={()=>setContent("login")} className='bg-white flex-1 text-black rounded-[20px] -[100px] h-[50px] border font-semibold'>Back</button>
                <button className=' text-white flex-[4.5] -[240px] h-[50px] rounded-[20px]' type="submit">Get reset link</button>
                </div>
            </form>
            {/* {message && <p>{message}</p>} */}
        </div>
    );
}else if(content === "reset password"){
    return(


        <div className="forgot-password-container flex-col md:items-center flex gap-2">
            <h2 className='text-[30px] text-center  font-medium'>Reset Password</h2>
            <p className='text-center font-[Inter] text-[#667085]'>Your new password must be different from <br /> the previous one.</p>
            <form className='max-md:w-full flex flex-col gap-4' onSubmit={handleSubmit}>
                <div className="form-group max-md:w-full flex-col flex gap-3">
              <div className="relative"> 
                       <input
                         type={showPassword ? "text" : "password"}
                         placeholder="Enter new password"
                         id="password"
                         className="rounded-[20px] font-[Inter] h-[60px] md:h-[50px] pr-12 border text-black   border-[#d0d5dd] active:border  w-full"
                        //  value={formData.password}
                        //  onChange={handleChange}
                         required
                       />
                       <button
                         type="button"
                         className="absolute -right-3 top-1/2 bg-transparent text-[#b7b7b7] border-none outline-0  transform -translate-y-1/2"
                         onClick={() => setShowPassword(!showPassword)}
                       >
                         {showPassword ? <FaEyeSlash /> : <FaEye />}
                       </button>
                     </div>
                     <div className="relative"> {/* Confirm Password input container */}
                       <input
                         type={showConfirmPassword ? "text" : "password"}
                        // type='password'
                         placeholder="Confirm new password"
                         className="rounded-[20px] font-[Inter] pr-12 w-full text-black h-[60px] md:h-[50px] border-[#d0d5dd]"
                         id="confirmPassword"
                        //  value={formData.confirmPassword}
                        //  onChange={handleChange}
                         required
                       />
                       <button
                         type="button"
                         className="absolute -right-3  top-1/2 bg-transparent text-[#b7b7b7] transform -translate-y-1/2"
                         onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                       >
                         {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                       </button>
                     </div>
                </div>
                <button className=' text-white lg:w-[360px] font-[Inter] h-[60px] md:h-[50px] max-md:w-full rounded-[20px]' type="submit">Reset password</button>
            </form>
            {message && <p className='text-center font-[Inter] text-[#667085] text-sm'>{message}</p>}
        </div>
    )
}

}
};

export default ForgotPassword;