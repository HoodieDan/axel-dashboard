import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { useDispatch } from "react-redux"; // Import useDispatch
import { setContent, setSignupFlow } from "../../store/slices/authSlice"; // Import the setContent action
import { useLocation, useNavigate } from "react-router-dom";
import { welcomeMessage } from "../layouts/userAuth";

interface SignupForm {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;
}

const Signup: React.FC = () => {
  const dispatch = useDispatch(); // Initialize useDispatch
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState<SignupForm>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Clear content when the component mounts
  useEffect(() => {
    dispatch(setContent(""));
  }, [dispatch]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLInputElement>
  ) => {
    const { id, type, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }

    // Handle signup logic here
    console.log("Form Data:", formData);
    setPasswordError(""); // Clear error in case of successful submission

    // Use Redux to set content to "confirmation"
    dispatch(setSignupFlow("confirmation"));
  };

  return (
    <div className="signup-container  sm:w-10/12 sm:mx-auto md:flex block flex-col justify-center h-full md:h-screen md:overflow-y-hidden max-md:pl-0 max-lg:pl-5 ">
      {welcomeMessage()}
      <form
        onSubmit={handleSubmit}
        className="flex pt-10 font-[Montserrat] flex-col  gap-5 md:gap-4"
      >
        <div>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            className="rounded-[20px] font-[Montserrat] text-black py-5  md:py-[17px] border-[#d0d5dd]"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="rounded-[20px] font-[Montserrat] py-5  md:py-[17px] text-black border-[#d0d5dd]"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            id="password"
            className="rounded-[20px] font-[Montserrat] py-5  md:py-[17px] pr-12 border text-black border-[#d0d5dd] active:border w-full"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="absolute -right-3 top-1/2 bg-transparent text-[#b7b7b7] border-none outline-0 transform -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            className="rounded-[20px] font-[Montserrat] pr-12 w-full text-black py-5  md:py-[17px] border-[#d0d5dd]"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="absolute -right-3 top-1/2 bg-transparent text-[#b7b7b7] transform -translate-y-1/2"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

        <button type="submit" className="rounded-[20px] py-5  md:py-[17px]">
          Get Started
        </button>
      </form>
      <div className="flex gap-2 w-full justify-center font-[Montserrat] items-center my-2">
        <p>Already have an account?</p>
        <button
          onClick={() => {
            dispatch(setContent("login"));
            navigate("../login");
          }} // Use Redux to set content to "login"
          className="font-semibold bg-transparent text-black w-fit p-0"
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Signup;