import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index"; // Adjust the path as needed
import Signup from "@/components/authPageComponents/signup";
import Confirmation from "@/components/authPageComponents/confirmation";
const AuthPage: React.FC = () => {
  const signupFlow = useSelector((state: RootState) => state.auth.signupFlow); // Get content from Redux store


  return (
    <div>
      {signupFlow === "signup" && <Signup />} 
      {signupFlow === "confirmation" && <Confirmation />} 
    </div>
  );
};

export default AuthPage;