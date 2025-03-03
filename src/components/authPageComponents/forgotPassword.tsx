import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/index";
import { setContent } from "../../store/slices/authSlice";

const ForgotPassword: React.FC = () => {
  const dispatch = useDispatch();
  const content = useSelector((state: RootState) => state.auth.content);

  const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  console.log("Rendering ForgotPassword with content:", content);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Debug: Log before updating content
    console.log("Updating content to 'reset password'");

    // Update the content state to "reset password"
    dispatch(setContent("reset password"));

    // setMessage(
    //   "If an account with that email exists, you will receive a password reset email shortly."
    // );
  };

  return  (
    <div className="forgot-password-container md:w-10/12 sm:w-3/5  sm:mx-auto flex  flex-col justify-center  overflow-y-hidden gap-3 max-md:pl-0 max-lg:pl-5">
      <h2 className="text-[30px] text-center font-medium">Forgot Password?</h2>
      <p className="text-center font-[Inter] text-[#667085]">
        We got you. Enter your email to get a link to <br /> reset your password.
      </p>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="form-group w-full">
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="rounded-[20px] h-[60px] w-full font-[Inter] md:h-[50px] text-black border-[#d0d5dd]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex gap-4 font-[Inter] pt-4">
          <button
            type="button"
            onClick={() => dispatch(setContent("login"))}
            className="bg-white flex-1 text-black rounded-[20px] h-[50px] border font-semibold"
          >
            Back
          </button>
          <button
            type="submit"
            className="text-white flex-[4.5] h-[50px] rounded-[20px] "
          >
            Get reset link
          </button>
        </div>
      </form>
    </div>
  ) }

export default ForgotPassword;