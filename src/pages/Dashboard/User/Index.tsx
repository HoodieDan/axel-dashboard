import React from 'react';
import { Link } from 'react-router-dom';
import cardFlower from '../../../assets/images/svgs/card-flower.svg';
import speakingBg from '../../../assets/images/jpegs/speaking-bg.jpeg';
import presentationBg from '../../../assets/images/jpegs/presentation-bg.jpeg';
import practiceBg from '../../../assets/images/jpegs/practice-bg.png';

const User: React.FC = () => {

    const score = 89;

    const cardsData = [
        {
          image: speakingBg,
          title: "Public Speaking",
          text: "Improve delivery & structure with real-time AI feedback",
          buttonText: "Start Public Speaking",
          href: "/nature",
        },
        {
          image: presentationBg,
          title: "Presentation",
          text: "Improve delivery & structure with real-time AI feedback",
          buttonText: "Start Your Presentation",
          href: "/nature",
        },
        {
          image: practiceBg,
          title: "Pitch Practice",
          text: "Sharpen your persuasion and confidence",
          buttonText: "Start Pitching",
          href: "/nature",
        },
      ];

    return (
        <div className='user__dashboard__index'>
            <p className='independence mb-5'>You’re making progress! Pick up where you left off</p>

            <div className="flex flex-wrap -mx-2 items-stretch">
                <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-3">
                    <div className="index__card p-4 flex flex-col h-full justify-between rounded-[12px] relative overflow-hidden">
                        <img src={cardFlower} alt="card flower background" className='absolute top-0 right-0 h-1/2' />
                        <small className="independence mb-3.5">Available Credit</small>
                        <h4 className='gunmetal mb-5.5'>100</h4>
                        <button className='p-3'>Buy More Credits</button>
                    </div>
                </div>
                {cardsData.map((card, index) => (
                    <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-2 mb-3">
                        <div className="index__card other__cards p-4 flex flex-col h-full justify-between rounded-[8px] relative overflow-hidden" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${card.image})` }}>
                            <h6 className='text-white mb-4'>{card.title}</h6>
                            <small className='light__silver mb-5'>{card.text}</small>
                            <Link to={card.href}>
                                <button className='p-3 w-full'>{ card.buttonText }</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-2/3 pe-2 mb-3">
                    <div className="session__score w-full p-5 rounded-[12px]">
                        <p className="big mb-5">Your latest session score</p>
                        <div className="mb-2 flex justify-between">
                            <p className="dark__charcoal">Public Speaking Score</p>
                            <p className="big">{score}%</p>
                        </div>
                        <div className="bar flex gap-1 mb-6">
                            {[...Array(5)].map((_, index) => {
                                const fillPercentage = Math.min(100, Math.max(0, ((score - index * 20) / 20) * 100));

                                return (
                                <div key={index} className="empty__bar h-4 rounded-4xl w-full">
                                    <div
                                        className="bar__fill rounded-4xl h-full transition-all duration-300"
                                        style={{ width: `${fillPercentage}%` }}
                                    ></div>
                                </div>
                                );
                            })}
                        </div>
                        <p className='dark__charcoal'>✊Keep going! You’re improving!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;