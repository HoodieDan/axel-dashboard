import React, { useState } from "react";
import authPageImage from "../assets/images/authPage-image.png";
import AuthQuestions from "../components/authPageComponents/auth-questions";
import engageLogo from "../assets/images/engage-x-logo.png";
import AuthRole from "../components/authPageComponents/auth-roles";
import Signup from "../components/authPageComponents/signup";
import Login from "../components/authPageComponents/login";
import ForgotPassword from "../components/authPageComponents/forgotPassword";
import { Link } from "react-router-dom";
import Confirmation from "../components/authPageComponents/confirmation";
import Tutorial from "../components/authPageComponents/tutorial";
// type View = 'signup' | 'login' | 'confirm' | 'forgot';
const UserPlan = () => {
  const [content, setContent] = useState("");
  const [topicQuestion, setTopicQuestion] = useState("What do you plan on doing?");

  // const [view, setView] = useState<View>('signup');
interface SignupForm {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;
}
const [signupFormData, setSignupFormData] = useState<SignupForm>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });



  const questions = [

    {id:1, 
      question: "What do you plan on doing?",
      content: [
        {contentId:1, plan: "Pitch"},
        {contentId:2, plan: "Present"},
        {contentId:3, plan: "Speak"},
      ]
    },

    {id:2, 
      question: "What role are you?",
      content: [
        {contentId:1, role: "Early Career Profession"},
        {contentId:2, role: "Mid-level Professionals"},
        {contentId:3, role: "Executives"},
        {contentId:4, role: "C-suites"},
        {contentId:5, role: "Athletes"},
        {contentId:6, role: "Entrepreneurs"},
        {contentId:7, role: "Sales Professionals"},
      ]
    },


  ]
  const plans = [
    {id:1, plan: "Pitch"},
    {id:2, plan: "Present"},
    {id:3, plan: "Speak"},
  ]
  return (
    <div className="h-screen md:px-10 px-5 py-5 justify-center md:justify-start  md:flex-row flex-col flex gap-5">
      <div className="auth flex-[0.8] py-5">
      {(topicQuestion === "What do you plan on doing?" && content === "") && <Link to="/" className="absolute top-8 left-4 flex h-[30px] md:hidden items-center rounded-3xl gap-2 py-6 px-5  bg-gradient-to-br from-[#c6c6c247] to-[#feeedd25] bg-slate-10 g-transparent text-black ">
          <svg
            width="12"
            height="14"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.556757 8.95661C0.440322 8.8391 0.375 8.68036 0.375 8.51494C0.375 8.34951 0.440322 8.19078 0.556757 8.07327L4.72342 3.90661C4.78064 3.8452 4.84964 3.79595 4.92631 3.76179C5.00298 3.72763 5.08574 3.70926 5.16966 3.70778C5.25357 3.7063 5.33693 3.72174 5.41476 3.75317C5.49258 3.78461 5.56327 3.83139 5.62262 3.89074C5.68197 3.95009 5.72876 4.02079 5.76019 4.09861C5.79163 4.17643 5.80707 4.25979 5.80558 4.34371C5.8041 4.42763 5.78574 4.51039 5.75158 4.58706C5.71742 4.66372 5.66816 4.73272 5.60676 4.78994L2.50676 7.88994L10.9984 7.88994C11.1642 7.88994 11.3232 7.95579 11.4404 8.073C11.5576 8.19021 11.6234 8.34918 11.6234 8.51494C11.6234 8.6807 11.5576 8.83967 11.4404 8.95688C11.3232 9.07409 11.1642 9.13994 10.9984 9.13994H2.50676L5.60676 12.2399C5.71716 12.3584 5.77726 12.5151 5.7744 12.677C5.77155 12.839 5.70595 12.9934 5.59144 13.108C5.47693 13.2225 5.32244 13.2881 5.16053 13.2909C4.99861 13.2938 4.8419 13.2337 4.72342 13.1233L0.556757 8.95661Z"
              fill="black"
            />
          </svg>
          <p className="text-lg font-[Neue Montreal]">Back to website</p>
        </Link>}
        <div className="text-black h-full flex  mt-5 flex-col gap-5 md:items-center justify-center">
         {(content !== "forgot password" && content !== "reset password" && content !== "confirmation") && <h1 className="inline-flex items-center justify-center w-full text-nowrap text-4xl md:text-5xl gap-2  md:w-fit ">
            Welcome to
            <img
              src={engageLogo}
              className="md:w-[190px max-lg:w-[11vw] max-md:w-[130px] mt-1 md:mt-3 h-[29.3px] md:h-[3.12vw]"
              alt="engage-x-logo"
            />
          </h1>}
          <div>

          {(content !== "forgot password" && content !== "reset password" && content !== "confirmation" && content !== "tutorial") && <p className="text-3xl text-center  bg-gradient-to-b from-[#1f1f1fdd] to-[#C0C0C0] bg-clip-text text-transparent ">
            AI-powered public speaking and <br />{" "}
            <span className="">
              presentation training platform
            </span>
          </p>}


          
        {content === "" && <AuthQuestions plans={plans} questions={questions}
        setContent={setContent} content={content} topicQuestion={topicQuestion} setTopicQuestion={setTopicQuestion} />}
        {
          content === "signup" && <Signup signupFormData={signupFormData} setSignupFormData={setSignupFormData} setContent={setContent} content={content} />
        }
        {
          content === "login" && <Login  setContent={setContent} content={content} />
          // content === "tutorial" && <Tutorial   />
        }
        {
          // content === "login" && <Login  setContent={setContent} content={content} />
          content === "tutorial" && <Tutorial   />
        }

        {(content === "forgot password" || content === "reset password") && <ForgotPassword setContent={setContent} content={content} />}
        {content === "confirmation" && <Confirmation setContent={setContent}  />}
        {/* {content === "Pitch" || content == "Present" || content == "Speak" && (<AuthRole />)} */}
          </div>
        </div>
        
      </div>
      <aside className="flex-1 rounded-[45px]  md:block hidden overflow-hidden  relative">
        <Link to="/" className="absolute top-[4%] left-4 flex h-[30px] items-center rounded-3xl gap-2 py-6 px-5  backdrop-blur-lg bg-transparent text-black ">
          <svg
            width="12"
            height="14"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.556757 8.95661C0.440322 8.8391 0.375 8.68036 0.375 8.51494C0.375 8.34951 0.440322 8.19078 0.556757 8.07327L4.72342 3.90661C4.78064 3.8452 4.84964 3.79595 4.92631 3.76179C5.00298 3.72763 5.08574 3.70926 5.16966 3.70778C5.25357 3.7063 5.33693 3.72174 5.41476 3.75317C5.49258 3.78461 5.56327 3.83139 5.62262 3.89074C5.68197 3.95009 5.72876 4.02079 5.76019 4.09861C5.79163 4.17643 5.80707 4.25979 5.80558 4.34371C5.8041 4.42763 5.78574 4.51039 5.75158 4.58706C5.71742 4.66372 5.66816 4.73272 5.60676 4.78994L2.50676 7.88994L10.9984 7.88994C11.1642 7.88994 11.3232 7.95579 11.4404 8.073C11.5576 8.19021 11.6234 8.34918 11.6234 8.51494C11.6234 8.6807 11.5576 8.83967 11.4404 8.95688C11.3232 9.07409 11.1642 9.13994 10.9984 9.13994H2.50676L5.60676 12.2399C5.71716 12.3584 5.77726 12.5151 5.7744 12.677C5.77155 12.839 5.70595 12.9934 5.59144 13.108C5.47693 13.2225 5.32244 13.2881 5.16053 13.2909C4.99861 13.2938 4.8419 13.2337 4.72342 13.1233L0.556757 8.95661Z"
              fill="black"
            />
          </svg>
          <p className="text-lg font-[Neue Montreal]">Back to website</p>
        </Link>
        <img
          src={authPageImage}
          className="w-full h-full  object-top object-cover"
          alt="authPage-image"
        />
      </aside>
    </div>
  );
};

export default UserPlan;
