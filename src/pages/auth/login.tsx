import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index"; // Adjust the path as needed
import Login from "../../components/authPageComponents/login"; // Import the Login component
import ForgotPassword from "../../components/authPageComponents/forgotPassword"; // Import the ForgotPassword component
import ResetPassword from "@/components/authPageComponents/resetPassword";
const AuthPage: React.FC = () => {
  const content = useSelector((state: RootState) => state.auth.content); // Get content from Redux store

  return (
    <div>
      {content === "login" && <Login />}
      {content === "forgot password" && <ForgotPassword />}{" "}
      {content === "reset password" && <ResetPassword />}
    </div>
  );
};

export default AuthPage;
