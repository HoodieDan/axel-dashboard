import React from 'react';
import { useNavigate } from 'react-router-dom';
import tutorial from "../../assets/images/tutorial-position.png"

const Tutorial: React.FC = () => {

    const navigate = useNavigate()
    return (
        <div className='flex justify-center items-center mt-0 flex-col'>
       <p className='text-[#667085] font-[Montserrat] -mt-3 mb-8'>A tutorial walkthrough video by AI Jacqueleen</p>
       <div className='my-4'>
        <img src={tutorial} alt="tutorial" />
       </div>
       <button onClick={()=> navigate("/dashboard/user")} className='font-[Montserrat] w-full md:max-w-[360px]'>Finish up</button>
        </div>

    );
};

export default Tutorial;