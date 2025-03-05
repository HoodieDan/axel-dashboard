import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setContent } from "../../store/slices/authSlice";

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Add your password reset logic here
    // Example: await resetPassword(email, password);

    dispatch(setContent("login"));
  };

  return (
    <div className="forgot-password-container md:w-10/12 sm:w-3/5  sm:mx-auto flex flex-col justify-center h-screen overflow-y-hidden  max-md:pl-0 gap-3 max-lg:pl-5">
      <h2 className="text-[30px] text-center font-medium">Reset Password</h2>
      <p className="text-center font-[Inter] text-[#667085]">
        Your new password must be different from <br /> the previous one.
      </p>
      <form
        className="max-md:w-full sm:w-[75%] sm:mx-auto flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="form-group max-md:w-full flex-col flex gap-3">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              id="password"
              className="rounded-[20px] font-[Inter] py-5 md:py-[17px] pr-12 border text-black border-[#d0d5dd] w-full"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-0 p-7 top-1/2 bg-transparent text-[#b7b7b7] transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm new password"
              className="rounded-[20px] font-[Inter] pr-12 w-full text-black py-5 md:py-[17px] border-[#d0d5dd]"
              id="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-0 p-7 top-1/2 bg-transparent text-[#b7b7b7] transform -translate-y-1/2"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="text-white lg:w-full font-[Inter] py-5 md:py-[17px] max-md:w-full rounded-[20px] "
        >
          Reset password
        </button>
      </form>
      {error && (
        <p className="text-center font-[Inter] text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
};

export default ResetPassword;
