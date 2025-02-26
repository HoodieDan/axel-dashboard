import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

interface SignupForm {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;
}

interface SignupProps{
    content: string;
    setContent: Function;
    signupFormData: SignupForm;
    setSignupFormData: React.Dispatch<React.SetStateAction<SignupForm>>;
}

const Signup: React.FC<SignupProps> = ({setContent, setSignupFormData}) => {
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

    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions");
      return;
    }

    // Handle signup logic here
    console.log("Form Data:", formData);
    setPasswordError(""); //clear error in case of successful submission
  };

  return (
    <div className="signup-container py-10 ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            className="rounded-[20px] text-black h-[50px] border-[#d0d5dd]"
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
            className="rounded-[20px] h-[50px] text-black border-[#d0d5dd]"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative"> {/* Password input container */}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            id="password"
            className="rounded-[20px] h-[50px] pr-12 border text-black   border-[#d0d5dd] active:border  w-full"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="absolute -right-3 top-1/2 bg-transparent text-[#b7b7b7] border-none outline-0  transform -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="relative"> {/* Confirm Password input container */}
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            className="rounded-[20px] pr-12 w-full text-black h-[50px] border-[#d0d5dd]"
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
        {/* <div>
          <label htmlFor="termsAccepted">
            <input
              type="checkbox"
              id="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> and <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </label>
        </div> */}
        <button type="submit" className="rounded-[20px] h-[50px]">
          Get Started
        </button>
      </form>
      <div className="flex gap-2 items-center my-2">
        <p>Already have an account?</p>
        <button onClick={()=>setContent("login")}  className="font-semibold  bg-transparent text-black w-fit p-0">Log in</button>
      </div>
    </div>
  );
};

export default Signup;