import React, { useState, Dispatch, SetStateAction } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface LoginProps {
  setContent: Dispatch<SetStateAction<string>>;
}
const Login: React.FC<LoginProps> = ({ setContent }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container font-[Inter] py-10 ">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="rounded-[20px] h-[60px] font-[Inter] md:h-[50px] max-md:w-full text-lg text-black border-[#d0d5dd]"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="relative">
          {" "}
          {/* Password input container */}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            id="password"
            className="rounded-[20px] font-[Montserrat] h-[60px] md:h-[50px] pr-12 border text-black   border-[#d0d5dd] active:border  w-full"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
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
        <button className="h-[60px] md:h-[50px]" type="submit">
          Login
        </button>
      </form>

      <section className="flex justify-between pt-2 ">
        <div>
          <label
            className="flex gap-2 justify-start items-center  text-sm  text-nowrap"
            htmlFor="remember"
          >
            <input
              type="checkbox"
              className="w-fit p-0 m-0"
              name="remember"
              id="remember"
            />
            Remember for 30 days
          </label>
        </div>

        <button
          onClick={() => {
            setContent("forgot password");
          }}
          className="font-semibold bg-transparent p-0 text-sm text-[#262b3a]"
        >
          Forgot Password
        </button>
      </section>

      <div className="w-full mt-4 ">
        <p className="flex items-center text-[#475467] gap-1 justify-center">
          Don't have an account?{" "}
          <button
            onClick={() => {
              setContent("signup");
            }}
            className="text-[#262b3a] font-semibold bg-transparent p-0"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
