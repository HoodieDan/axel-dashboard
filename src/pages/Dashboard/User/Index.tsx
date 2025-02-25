import React from 'react';
import { Link } from 'react-router-dom';
import cardFlower from '../../../assets/images/svgs/card-flower.svg';
import speakingBg from '../../../assets/images/jpegs/speaking-bg.jpeg';
import presentationBg from '../../../assets/images/jpegs/presentation-bg.jpeg';
import practiceBg from '../../../assets/images/jpegs/practice-bg.png';
import SemiCircleProgress from '../../../components/dashboard/SemiCircleProgress';
import SegmentedProgressBar from '../../../components/dashboard/SegmentedProgressBar';
import LineChart from '../../../components/dashboard/LineChart';

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

    const goals = [
        {
            icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 4.5C9 2.01472 6.98528 0 4.5 0C2.01472 0 0 2.01472 0 4.5C0 6.98528 2.01472 9 4.5 9C2.01472 9 0 11.0147 0 13.5C0 15.9853 2.01472 18 4.5 18C6.98528 18 9 15.9853 9 13.5C9 15.9853 11.0147 18 13.5 18C15.9853 18 18 15.9853 18 13.5C18 11.0147 15.9853 9 13.5 9C15.9853 9 18 6.98528 18 4.5C18 2.01472 15.9853 0 13.5 0C11.0147 0 9 2.01472 9 4.5Z" fill="#64BA9E"/>
                    </svg>,
            title: 'Improving vocal delivery',
            percent: 100,
            color: '#64BA9E',
        },
        {
            icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 4.5C9 2.01472 6.98528 0 4.5 0C2.01472 0 0 2.01472 0 4.5C0 6.98528 2.01472 9 4.5 9C2.01472 9 0 11.0147 0 13.5C0 15.9853 2.01472 18 4.5 18C6.98528 18 9 15.9853 9 13.5C9 15.9853 11.0147 18 13.5 18C15.9853 18 18 15.9853 18 13.5C18 11.0147 15.9853 9 13.5 9C15.9853 9 18 6.98528 18 4.5C18 2.01472 15.9853 0 13.5 0C11.0147 0 9 2.01472 9 4.5Z" fill="#999B84"/>
                    </svg>,
            title: 'Reducing filler words',
            percent: 100,
            color: '#999B84',
        },
        {
            icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 4.5C9 2.01472 6.98528 0 4.5 0C2.01472 0 0 2.01472 0 4.5C0 6.98528 2.01472 9 4.5 9C2.01472 9 0 11.0147 0 13.5C0 15.9853 2.01472 18 4.5 18C6.98528 18 9 15.9853 9 13.5C9 15.9853 11.0147 18 13.5 18C15.9853 18 18 15.9853 18 13.5C18 11.0147 15.9853 9 13.5 9C15.9853 9 18 6.98528 18 4.5C18 2.01472 15.9853 0 13.5 0C11.0147 0 9 2.01472 9 4.5Z" fill="#C29C81"/>
                    </svg>,
            title: 'Improve Grammar',
            percent: 100,
            color: '#C29C81',
        },
        {
            icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 4.5C9 2.01472 6.98528 0 4.5 0C2.01472 0 0 2.01472 0 4.5C0 6.98528 2.01472 9 4.5 9C2.01472 9 0 11.0147 0 13.5C0 15.9853 2.01472 18 4.5 18C6.98528 18 9 15.9853 9 13.5C9 15.9853 11.0147 18 13.5 18C15.9853 18 18 15.9853 18 13.5C18 11.0147 15.9853 9 13.5 9C15.9853 9 18 6.98528 18 4.5C18 2.01472 15.9853 0 13.5 0C11.0147 0 9 2.01472 9 4.5Z" fill="#EEBC89"/>
                    </svg>,
            title: 'Complete 5 Pitch Practices',
            percent: 100,
            color: '#EEBC89',
        },
        {
            icon: <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.11852 5.1908H13.8802C14.7956 5.1908 15.6735 5.55431 16.3209 6.20142C16.9683 6.84853 17.3322 7.72626 17.3327 8.64163V13.4041C17.3327 14.3198 16.9689 15.1979 16.3215 15.8454C15.674 16.4929 14.7958 16.8566 13.8802 16.8566H4.11852C3.203 16.8566 2.32497 16.493 1.67752 15.8457C1.03008 15.1984 0.666237 14.3205 0.666016 13.405V8.64163C0.666678 7.7264 1.03072 6.84889 1.67811 6.20196C2.32551 5.55503 3.20329 5.1908 4.11852 5.1908ZM4.11852 6.85746C3.88404 6.85713 3.65181 6.90305 3.4351 6.99257C3.2184 7.0821 3.02147 7.21348 2.8556 7.3792C2.68972 7.54492 2.55816 7.74172 2.46843 7.95834C2.3787 8.17497 2.33257 8.40716 2.33268 8.64163V13.4041C2.33268 14.39 3.13268 15.19 4.11852 15.19H13.8802C14.8668 15.19 15.666 14.39 15.666 13.4041V8.64163C15.666 7.6558 14.866 6.85663 13.8802 6.85663L4.11852 6.85746Z" fill="#252A39"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.775 1.11913C6.61583 0.739959 7.51667 0.666626 8.3025 0.666626H9.13583C9.75 0.666626 10.4108 0.722459 11.0617 0.924959C11.71 1.12579 12.3358 1.41163 12.7292 2.04579C13.0942 2.63413 13.1667 3.38163 13.1667 4.22746V6.49996H11.5V4.22746C11.5 3.39996 11.4092 3.07913 11.3133 2.92496C11.2467 2.81663 11.1125 2.68579 10.5675 2.51663C10.1342 2.38163 9.65583 2.33329 9.13583 2.33329H8.3025C7.5975 2.33329 6.97917 2.40496 6.46083 2.63829C6.14833 2.77996 5.99 2.91329 5.88667 3.08079C5.77583 3.26246 5.66667 3.58829 5.66667 4.22746V6.49996H4V4.22746C4 3.41913 4.13417 2.75163 4.46583 2.21079C4.80583 1.65579 5.28917 1.33829 5.775 1.11913ZM8.97 9.53579C9.19101 9.53579 9.40298 9.62359 9.55926 9.77987C9.71554 9.93615 9.80333 10.1481 9.80333 10.3691V11.3808C9.80333 11.6018 9.71554 11.8138 9.55926 11.97C9.40298 12.1263 9.19101 12.2141 8.97 12.2141C8.74899 12.2141 8.53702 12.1263 8.38074 11.97C8.22446 11.8138 8.13667 11.6018 8.13667 11.3808V10.3691C8.13667 10.1481 8.22446 9.93615 8.38074 9.77987C8.53702 9.62359 8.74899 9.53579 8.97 9.53579Z" fill="#252A39"/>
                    </svg>,
            title: 'Improving vocal delivery',
            percent: 50,
            color: '#252A39',
        },
    ]

    const labels = ["10 Feb", "11 Feb", "12 Feb", "13 Feb", "14 Feb", "15 Feb", "16 Feb"];

    const datasets = [
        {
            label: "Volume",
            data: [9, 12, 12, 12, 16.5, 15, 15],
            borderColor: "#252A39",
            backgroundColor: "rgba(79, 70, 229, 0.2)",
        },
        {
            label: "Articulation",
            data: [8, 9, 4.5, 4.7, 7.5, 7, 7],
            borderColor: "#40B869",
            backgroundColor: "rgba(230, 57, 70, 0.2)",
        },
        {
            label: "Confidence",
            data: [0, 2, 6, 5, 15, 4, 3.5],
            borderColor: "#F5B546",
            backgroundColor: "rgba(42, 157, 143, 0.2)",
        },
    ];

    return (
        <div className='user__dashboard__index'>
            <p className='independence mb-5'>You’re making progress! Pick up where you left off</p>

            {/* cards */}
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
                <div className="w-full lg:w-6/9 pe-2 mb-3">
                    {/* latest session score  */}
                    <div className="session__score w-full p-5 rounded-[12px]">
                        <p className="big mb-5">Your latest session score</p>
                        <div className="mb-2 flex justify-between">
                            <p className="dark__charcoal">Public Speaking Score</p>
                            <p className="big">{score}%</p>
                        </div>
                        <SegmentedProgressBar percent={score} color='#40B869' divisions={5} height={4} />
                        <p className='dark__charcoal mt-6'>✊Keep going! You’re improving!</p>
                    </div>

                    {/* performance analytics */}
                    <div className="analytics px-5 py-7 mt-6 rounded-[8px]">
                        <div className="flex justify-between items-center mb-6">
                            <p className="big chinese__black">Performance Analytics</p>
                            <div className="flex items-center">
                                <select className="me-4 px-3 py-2 rounded-[8px]">
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                                <small className="underline cursor-pointer gunmetal">View All</small>
                            </div>
                        </div>

                        <div className="chart__div">
                            <LineChart labels={labels} datasets={datasets} />
                        </div>

                    </div>
                </div>

                {/* goals and achievments */}
                <div className="w-full lg:w-3/9 ps-2 mb-3 lg:mb-10">
                    <div className="goals p-5 rounded-[12px]">
                        <p className='chinese__black big mb-3'>Your goals & achievments</p>
                        <small className="underline gunmetal cursor-pointer">View All</small>

                        <div className="progress__div relative flex flex-col items-center w-full mt-7 mb-6">
                            <SemiCircleProgress percent={0.8} />
                            <h2 className='pt-20 mb-2'>🎊</h2>
                            <p className='mb-3'>5 goals completed</p>
                            <h2 className='mb-3'>4/5</h2>
                            <p className="gunmetal text-center">Yeh! you’ve achieved most of your goals</p>
                        </div>

                        <div className="progress__bars__div">
                            {goals.map((goal, index) => (
                                <div key={index} className="flex progress__bar__item mb-3 items-stretch">
                                    <div className="rounded-4xl w-1/6 icon__bg me-2 aspect-square flex items-center justify-center">
                                        {goal.icon}
                                    </div>
                                    <div className="w-5/6 flex flex-col justify-between h-full">
                                        <div className="flex justify-between mb-2 mt-1.5 dark__charcoal">
                                            <small>{ goal.title }</small>
                                            <small>{ goal.percent }%</small>
                                        </div>
                                        <div className='mt-1'>
                                            <SegmentedProgressBar percent={goal.percent} color={goal.color} divisions={10} height={3} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className='mt-6 w-full rounded-4xl'>Set New Goals</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;