import React from 'react';
import { useNavigate } from 'react-router-dom';


interface ConfirmationProps {
    setContent: React.Dispatch<React.SetStateAction<string>>
}
const Confirmation: React.FC<ConfirmationProps> = ({setContent}) => {
    const navigate = useNavigate();

    const handleResendLink = () => {
        // Logic to resend the confirmation link
    };

    return (
       <div className='flex flex-col gap-2 justify-center w-full items-center'>
             <h2 className='text-[166%] font-medium'>We sent you a confirmation link</h2>
             <p className='text-center font-[Montserrat] text-sm text-[#667085]'>Click on the link sent to finish signing up. <br /> Link lasts for only 1 minute</p>
             <div className='flex w-full gap-4 font-[Montserrat] pt-2'>
                <button onClick={()=>setContent("signup")} className='bg-white flex-[0.3] md:w-[100px] text-black rounded-[20px] h-[50px] border font-semibold'>Back</button>
                <button onClick={()=>{setContent("mail")}} className=' text-white flex-[30] h-[50px]  md:w-[240px] rounded-[20px]' type="submit">Go to mail</button>
                </div>
                <p className='text-sm font-[Montserrat] flex  items-center  mt-2 gap-1 text-[#475467]'>Didn't recieve any link? <button onClick={handleResendLink} className='font-semibold text-[#262B3A] bg-white p-0 m-0'>Click here</button></p>
       </div>
    );
};

export default Confirmation;