import SegmentedProgressBar from '@/components/dashboard/SegmentedProgressBar';
import React from 'react';
import { Button } from '@/components/ui/button';
import { ThumbsUp, Volume2 } from 'lucide-react';
import audience from '../../assets/images/pngs/audience.png';

const PitchPractice: React.FC = () => {
    return (
        <div>
            <section className="flex flex-wrap border-b-1 px-8 py-4 justify-between items-center">
                <div className="w-9/12">
                    <h4 className="mb-4">Pitch Practice Session</h4>
                    <div className="mb-3">
                        <SegmentedProgressBar percent={10} color={"#252A39"} divisions={1} />
                    </div>
                    <small className="gray">Slide 1 of 10</small>
                </div>

                <div className="flex gap-2">
                    <Button>Restart</Button>
                    <Button>Exit</Button>
                </div>
            </section>

            <section className="flex flex-wrap">
                {/* left side  */}
                <div className="left__side w-full lg:w-9/12 px-8 lg:pe-4 py-4">
                    <div className="">
                        <div className="border-32 rounded-3xl w-full h-120"></div>

                        <div className="mt-3">
                            <div className="flex">
                                <Volume2 />
                                <p className="ms-2">Audio Settings</p>
                                <p className="ms-3">
                                    Time: <span>05:23</span>
                                </p>
                            </div>
                        </div>

                        <div className="w-full rounded-xl border-1 px-3.5 py-3 mt-5">
                            <h6 className="py-2">Speaker Notes</h6>
                            <p>
                                “Our solution leverages cutting-edge AI to transform how businesses handle customer
                                service...”
                            </p>
                        </div>
                    </div>
                </div>

                {/* right side  */}
                <div className="right__side w-full lg:w-3/12 px-8 lg:ps-4 py-4">
                    <div className="py-5 px-3 border-1 rounded-xl">
                        <h6 className="mb-3">Live Audience</h6>
                        <img src={audience} alt="audience" />
                    </div>

                    <div className="py-5 px-3 border-1 rounded-xl mt-3">
                        <h6 className="mb-4">Audience Engaged</h6>
                        <div className='mb-2'>
                            <SegmentedProgressBar percent={86} color={"#40B869"} divisions={1} />
                        </div>
                        <small>86% engaged</small>
                    </div>

                    <div className="py-5 px-3 border-1 rounded-xl mt-3">
                        <h6 className="mb-4">Live Audience Reaction</h6>
                        <div className="reactions">
                            <div className="flex w-full justify-between items-center">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 flex items-center justify-center bg-">
                                        <ThumbsUp />
                                    </div>
                                </div>
                                <p>32</p>
                            </div>
                        </div>
                    </div>

                    <div className="py-5 px-3 border-1 rounded-xl mt-3">
                        <h6 className="mb-3">Live Audience</h6>
                        <img src={audience} alt="audience" />
                    </div>

                    <div className="py-5 px-3 border-1 rounded-xl mt-3">
                        <h6 className="mb-3">Live Audience</h6>
                        <img src={audience} alt="audience" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PitchPractice;