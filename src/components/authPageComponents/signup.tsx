import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setContent, setSignupFlow } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { welcomeMessage } from "../layouts/userAuth";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const signupSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
    termsAccepted: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupFormValues = z.infer<typeof signupSchema>;

const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    },
  });

  const onSubmit: SubmitHandler<SignupFormValues> = (data) => {
    console.log("Form Data:", data);
    dispatch(setSignupFlow("confirmation"));
  };

  return (
    <div className="signup-container sm:w-10/12 px-1 sm:mx-auto md:flex block flex-col justify-center h-full md:h-screen md:overflow-y-hidden max-md:pl-0 max-lg:pl-5">
      {welcomeMessage()}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex pt-10 font-[Montserrat] flex-col gap-5 md:gap-4"
        >
          {/* Full Name Field */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter your full name"
                    className="rounded-[20px] font-[Montserrat] text-black py-5 md:py-[23px] border-[#d0d5dd]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    className="rounded-[20px] font-[Montserrat] py-5 md:py-[23px] text-black border-[#d0d5dd]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="rounded-[20px] font-[Montserrat] py-5 md:py-[23px] pr-12 border text-black border-[#d0d5dd] active:border w-full"
                      {...field}
                    />
                    <Button
                      type="button"
                      className="absolute right-1 shadow-none top-1/2 bg-transparent text-[#b7b7b7] border-none outline-0 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password Field */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="rounded-[20px] font-[Montserrat] pr-12 w-full text-black py-5 md:py-[23px] border-[#d0d5dd]"
                      {...field}
                    />
                    <Button
                      type="button"
                      className="absolute shadow-none right-1 top-1/2 bg-transparent text-[#b7b7b7] transform -translate-y-1/2"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="termsAccepted"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <label
                    htmlFor="remember"
                    className="flex gap-2 justify-start items-center text-sm text-nowrap"
                  >
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      name="remember"
                      id="remember"
                      className=" border-2  p-2 border-gray-300 rounded-md checked:bg-transparent   bg-transparent  data-[state=checked]:bg-transparent data-[state=checked]:text-black "
                    />
                    Remember for 30 days
                  </label>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="rounded-[20px] py-5 md:py-[23px]">
            Get Started
          </Button>
        </form>
      </Form>

      {/* Login Link */}
      <div className="flex gap-2 w-full justify-center font-[Montserrat] items-center my-2">
        <p>Already have an account?</p>
        <Button
          onClick={() => {
            dispatch(setContent("login"));
            navigate("../login");
          }}
          className="font-semibold bg-transparent text-black w-fit p-0"
        >
          Log in
        </Button>
      </div>
    </div>
  );
};

export default Signup;
