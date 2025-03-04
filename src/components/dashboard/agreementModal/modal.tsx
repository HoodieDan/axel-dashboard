import React, { useState, useRef, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import engageXModalLogo from "../../../assets/images/pngs/modal-logo.png";
import modalFirstImage from "../../../assets/images/pngs/user-agreement-image-1.png";
import cloudCheck from "../../../assets/images/svgs/cloud-check.svg"
import cloudCheckGray from "../../../assets/images/svgs/cloud-check-gray.svg"
import "swiper/css";
import "swiper/css/pagination";

const MultiStepAgreement = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const [swiper, setSwiper] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [initials, setInitials] = useState<string>("");

  const [agree, setAgree] = useState<boolean>(false)
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [canProceed, setCanProceed] = useState(true);
  const agreementRef = useRef<HTMLDivElement>(null);
  const [industryState, setIndustryState] = useState<string>("")
  
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgree(event.target.checked);
  };

  const hasRun = useRef(false);

  useEffect(() => {
    if (currentStep === 2 && !hasRun.current) {
      setCanProceed(false);
      hasRun.current = true; // Mark as executed
    }
  }, [currentStep]);


  const handleScroll = () => {
    if (agreementRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = agreementRef.current;

      // Enable button only if user reaches the bottom
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        setCanProceed(true);
      }
    }
  };

  const handleNext = () => {
    if(currentStep ===3 && (agree !== true || initials === "") ) return 
    if(currentStep === 4 && filePreview === null) return
    if(currentStep === 5  && industryState === "") return
    if (swiper && currentStep < 6) {
      swiper.slideNext();
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (swiper && currentStep > 0) {
      swiper.slidePrev();
      setCurrentStep((prev) => prev - 1);
    }
  };

  const MAX_SIZE = 3 * 1024 * 1024;
  const imageRef = useRef<HTMLInputElement>(null);
  const handleImageClick = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const allowedTypes = ["image/jpeg", "image/png", "application/pdf", "video/mp4"];

      if (!allowedTypes.includes(file.type)) {
        alert("Invalid file type! Only JPG, PNG, PDF, and MP4 are allowed.");
        return;
      }

      if (file.size > MAX_SIZE) {
        alert("File size exceeds 5MB limit!");
        return;
      }

      if (file.type.startsWith("image/")) {
        const imageURL = URL.createObjectURL(file);
        setFilePreview(imageURL);
      } else {
        setFilePreview(null);
      }

      console.log("File selected:", file.name);
    }
  };

  const engageXImage = () => {
    return <img className="w-28" src={engageXModalLogo} alt="" />;
  };
  return (
    <Dialog.Root
      open={modalOpen}
      modal={true}
      onOpenChange={() => setModalOpen(true)}
      
    >
      <Dialog.Portal >
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content
          className={`fixed top-1/2 left-1/2 z-[100]  w-[315px]  ${currentStep === 1 ? "md:w-[50vw]" : "md:w-[60vw]" } h- overflow-scroll mx-auto  max-md:h-mi ax-md:h-fit bg-white p-5 pt-0 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2`}
        >
          {/* <h2 className="text-xl font-bold mb-4 text-center">User Agreement</h2> */}

          {/* Swiper for Multi-Step Content */}
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: false }}
            className={`pb-8 max-sm:text-md  my-0 mt-4 ${
            currentStep === 1 ? "md:w-[ max-md:h-[420px] md:max-h-[40vh]" : "  w-full max-md:h-fit "
          } font-[Montserrat]`}
            allowTouchMove={false} // Prevents swiping, only Next/Back buttons work
            onSwiper={(swiper) => setSwiper(swiper)}
          >
            <SwiperSlide className="flex flex-col w-full my-0 gap-2">
                <img
                  src={modalFirstImage}
                  className="w-full"
                  alt="modal-image"
                />
                <div className="flex  w-full items-end justify-center ">
                  <p className="text-3xl md:text-4xl">Welcome to</p>
                  <img
                    src={engageXModalLogo}
                    className="w-32 mb-[0.1rem] md:-mb-0.5 ml-1 md:h-10"
                    alt=""
                  />
                </div>
                <p className="text-[#101828] text-center text-sm">
                  Please Review & Accept Our User Agreement
                </p>
            </SwiperSlide>

            <SwiperSlide>
              {engageXImage()}
              <div
                className=" w-full"
              >
                {/* <h3 className="text-lg font-semibold mb-2">Step 2: Privacy Policy</h3> */}

                <p className="text- my-2"> Welcome to EngageX!</p>
                <p className="text-s text-wrap w-full">
                  By using our platform, you acknowledge that you have read,
                  understood, and agreed to this User-Level Agreement (ULA),
                  which governs your access and use of our AI-powered public
                  speaking and presentation practice environment.
                </p>

                <p className="text-sm">
                  By clicking “I Agree” and providing your initials, you confirm
                  your acceptance of these terms.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div
              ref={agreementRef}
              onScroll={handleScroll}
                className="  overflow-y-scroll h-[50vh] max-md:pr-2 md:h-[55vh]  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
//   [&::-webkit-scrollbar-track]:rounded-2xl
  [&::-webkit-scrollbar-thumb]:bg-gray-400
  [&::-webkit-scrollbar-thumb]:rounded
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 my-2 flex flex-col gap-2 "
              >
                {engageXImage()}
                {/* <h3 className="text-lg font-semibold mb-2">Step 2: Privacy Policy</h3> */}
                <article className="text-[#101828]">
                  <p className="font-semibold"> Welcome to EngageX!</p>

                  <p>
                    By using our platform, you acknowledge that you have read,
                    understood, and agreed to this User-Level Agreement (ULA),
                    which governs your access and use of our AI-powered public
                    speaking and presentation practice environment.
                  </p>
                  <p>
                    By clicking “I Agree” and providing your initials, you
                    confirm your acceptance of these terms.
                  </p>

                  <p>1. Introduction</p>
                  <p>
                    Welcome to EngageX! By using our platform, you acknowledge
                    that you have read, understood, and agreed to this
                    User-Level Agreement (ULA), which governs your access and
                    use of our AI-powered public speaking and presentation
                    practice environment.
                  </p>
                  <p>
                    By clicking “I Agree” and providing your initials, you
                    confirm your acceptance of these terms.
                  </p>

                  <div>
                    <p>2. Acceptable Use Policy</p>
                    <p>
                      EngageX is designed for public speaking, presentation
                      practice, and AI-generated feedback. You agree to:
                    </p>
                    <ul className="list-disc leading-8">
                      <li>Use the platform only for its intended purpose.</li>{" "}
                      <li>
                        Respect the integrity of AI-generated evaluations.
                      </li>{" "}
                      <li>
                        Maintain professionalism and avoid offensive or unlawful
                        content.
                      </li>{" "}
                      <li>
                        Refrain from attempting to reverse-engineer, manipulate,
                        or misuse AI-generated insights.
                      </li>
                      We reserve the right to suspend or terminate accounts that
                      violate these policies.
                    </ul>
                  </div>

                  <div>
                    <p>
                      3. AI-Generated Feedback Disclaimer EngageX utilizes
                      AI-powered systems to analyze your speech and provide
                      feedback.
                    </p>{" "}
                    <p>
                      AI-generated feedback is advisory only and does not
                      constitute professional coaching.
                    </p>{" "}
                    <p>
                      AI does not store your session content for learning
                      purposes—only for generating feedback.
                    </p>{" "}
                    <p>
                      While we analyze vocal patterns to improve evaluations,
                      this is strictly for enhancing session accuracy and not
                      for long-term AI model training. EngageX is not
                      responsible for any decisions made based on AI feedback.
                    </p>
                  </div>

                  <div>
                    <p>
                      4. Confidentiality of Personal Data Your privacy is our
                      priority.
                    </p>{" "}
                    <p>
                      EngageX does not share personal information, session
                      recordings, or analytics with third parties, except where
                      required by law.
                    </p>{" "}
                    <p>
                      Data collected is used only to generate your session
                      feedback and is not stored for AI training.
                    </p>{" "}
                    <p>
                      After 24 hours, all session recordings are automatically
                      deleted from our systems. Once a session recording is
                      downloaded by you, EngageX is not liable for its
                      confidentiality, security, or misuse.
                    </p>
                  </div>

                  <div>
                    <p>
                      5. Terms for Session Recording & Downloading EngageX
                      offers session recording & download features for your
                      convenience.
                    </p>
                    
                      <ol className="list-disc ml-3 flex flex-col gap-2 leading-6 mt-1">

                     <li> Coaching & Evaluation: Your session recordings may be
                      shared with a coach of your choosing for feedback.</li>
                    
                    <li>  Limited Storage: EngageX stores session recordings for 24
                      hours only before permanent deletion.</li>
                  
                   <li>   User Responsibility: Once downloaded, EngageX is not
                      responsible for data security, loss, or compromise. You
                      accept full responsibility for the storage and usage of
                      downloaded session recordings.</li>
                    
                      </ol>
                  </div>

                    <br />
                  <div>
                    <p>
                      6. Legal & Liability Protection EngageX is provided "as
                      is" without warranties of any kind.
                    </p>{" "}
                    <p>
                      EngageX is not liable for any:
                      
                      <ul className="list-disc">
                        <li>

                        Misinterpretation of AI
                      feedback.
                        </li>
                      <li> Data loss due to expired session storage.</li>
                     <li> Third-party misuse of downloaded content.</li>
                     <li>Performance
                      outcomes based on our platform's analysis.</li> 
                      <li> By using
                      EngageX, you waive the right to frivolous lawsuits or
                      claims seeking damages beyond platform usage fees.</li>
                        </ul> 
                    </p>
                  </div>

                  <p className="mt-2">
                    By clicking “I Agree” and providing your initials, you
                    confirm your acceptance of these terms.
                  </p>
                </article>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="  max-md:pr-2 md:h-[55vh]  [&::-webkit-scrollbar]:w-2
   flex flex-col gap-3">
                {engageXImage()}
                {/* <h3 className="text-lg font-semibold mb-2">Step 2: Privacy Policy</h3> */}
                <p className="font-semibold">Agreement & Acceptance</p>
                <div>
                  <p>
                    By checking "I Agree" and entering your initials, you
                    confirm:
                  </p>

                  <ul className="list-disc leading-7 mt-5">
                    <li> You understand and accept EngageX's policies.</li>{" "}
                    <li>
                      You acknowledge session data is deleted after 24 hours.
                    </li>{" "}
                    <li>
                      You take full responsibility for downloaded recordings.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <p>Enter Initials here</p>
                  <input type="text"
                  value={initials}
                  className="font-[Inter] text-black"
                  placeholder="Type your Initials here"
                  onChange={(e)=> setInitials(e.target.value)}
                  name="initialsBox" id="initialsBox" />

                    <label htmlFor="terms" className="flex gap-2 items-center ">
                        <input type="checkbox" checked={agree} onChange={handleChange} className="w-fit" name="terms" id="terms" />
                        I agree to the terms and condition
                    </label>

                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" max-md:pr-2 md:h-[55vh]  [&::-webkit-scrollbar]:w-2
   flex flex-col items-center w-full gap-1">
                {/* {engageXImage()} */}
                {/* <h3 className="text-lg font-semibold mb-2">Step 2: Privacy Policy</h3> */}
                <img src={cloudCheck} alt="checkSvg" />
                <p>Upload Picture</p>
                <p className="text-[#A9ACB4] text-center"> Upload your picture for easy identification </p>
                <div className="overflow-y-scrol h-[25rem] max-md:pr-2 md:h-[55vh]  [&::-webkit-scrollbar]:w-2
relative p-1 overflow-hidden flex flex-col justify-center gap-2 mt- items-center w-full border-dashed rounded-xl border-2 py-14">
                   {filePreview !== null && <img src={filePreview} className="absolute  top-0 min-w-[40%] max-w-[100%] z-20" alt="" />}
                <img src={cloudCheckGray} className="mb-4" alt="checkSvg" />
                    <p>Choose a file or drag & drop it here</p>
                    <p className="text-[#a9acb4] text-center">JPEG, PNG, PDG, and MP4 formats, up to 5MB</p>
                    <input type="file" name="" ref={imageRef} className="hidden"  accept="image/jpeg, image/png, application/pdf, video/mp4"
        onChange={handleFileChange} id="imageUpload" />
                    <button onClick={handleImageClick} className="mt-6 bg-transparent text-[#54575c] border-[#cbd0dc] rounded-md border px-10 py-3 ">Browse File</button>

                </div>
           
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="overflow-y-s max-md:pr-2 md:h-[55vh]  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-track]:rounded-2xl
  [&::-webkit-scrollbar-thumb]:bg-gray-400
  [&::-webkit-scrollbar-thumb]:rounded
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 flex flex-col items-start w-full gap-1">
                {/* {engageXImage()} */}
                {/* <h3 className="text-lg font-semibold mb-2">Step 2: Privacy Policy</h3> */}
                <img src={cloudCheck} className="mx-auto" alt="checkSvg" />
                <p className="mx-auto">Upload Picture</p>
                <p className="text-[#A9ACB4] mx-auto text-center "> Upload your picture for easy identification </p>
                <div className="relative overflow-hidden max-md:h-[21.5rem]  w-full border-dashed rounded-xl border-2 ">
                   {filePreview !== null && <img src={filePreview} className="w-full h-full  object-cover object-top min-w-[40%] max-w-[100%] z-20" alt="" />}
                </div>
              <label className="mt-1 flex flex-col gap-1 font-semibold w-full" htmlFor="industryName">
                Enter industry name here
                <input type="text" value={industryState} className="font-normal font-[Inter] text-black" onChange={(e)=>setIndustryState(e.target.value)} name="industryName" id="industryName" />
              </label>
           
              </div>
            </SwiperSlide>

       
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-2 mt-4">
           
           {currentStep !== 5 &&  <button
              className={`px-4 py-4 w-full rounded-[20px] ${
                currentStep === 0
                  ? "bg-gray-300"
                  : "bg-transparent text-[#344054] border"
              }`}
              disabled={currentStep === 0}
              onClick={handleBack}
            >
              Back
            </button>}

            {currentStep < 5  ? (
              <button
                disabled={!canProceed}
                className={` ${canProceed  ? "bg-[#262b3a]": "bg-gray-400 cursor-not-allowed"} ${currentStep === 4 && filePreview === null ? " bg-gray-400 cursor-not-allowed": "bg-[#262b3a]" }  ${currentStep === 3 &&  (agree !== true || initials === "") ? " bg-gray-400 cursor-not-allowed": "bg-[#262b3a]" } w-full text-white  px-4 py-2 rounded-[20px]`}
                onClick={handleNext}
              >
                Next
              </button>
            ) : (
              <button
                className={`${currentStep === 5 && industryState === ""? " bg-gray-400 cursor-not-allowed": "bg-[#262b3a]" } text-white px-4 py-4 rounded-[20px] w-full`}
                onClick={() => {
                    if(industryState !== "") setModalOpen(false)}}
              >
                Confirm
              </button>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MultiStepAgreement;
