import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setContent } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { welcomeMessage } from "../layouts/userAuth";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "shadcn/ui/form"; 
import { Input } from "../ui/input"; // Import shadcn Input component
import { Button } from "../ui/button"; // Import shadcn Button component
import { Checkbox } from "../ui/checkbox"; // Import shadcn Checkbox component

// Define the schema for the form
const loginSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Infer the type for TypeScript
type LoginFormValues = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  // Initialize react-hook-form with zod resolver
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle form submission
  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log("Form Data:", data);
    // Handle login logic here
  };

  return (
    <div className="login-container font-[Inter] sm:w-10/12 sm:mx-auto md:flex block flex-col justify-center h-full md:h-screen md:overflow-y-hidden max-md:pl-0 max-lg:pl-5">
      {welcomeMessage()}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="pt-10 flex flex-col gap-4">
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    className="rounded-[20px] py-5 md:py-[17px] font-[Inter] max-md:w-full text-lg text-black border-[#d0d5dd]"
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
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="rounded-[20px] font-[Montserrat] py-5 md:py-[17px] pr-12 border text-black border-[#d0d5dd] active:border w-full"
                      {...field}
                    />
                    <Button
                      type="button"
                      className="absolute -right-3 top-1/2 bg-transparent text-[#b7b7b7] border-none outline-0 transform -translate-y-1/2"
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

          {/* Submit Button */}
          <Button type="submit" className="h-[60px] md:h-[50px]">
            Login
          </Button>
        </form>
      </Form>

      {/* Remember Me and Forgot Password Section */}
      <section className="flex justify-between pt-2">
        <div>
          <label className="flex gap-2 justify-start items-center text-sm text-nowrap" htmlFor="remember">
            <Checkbox
              className="w-fit p-0 m-0"
              name="remember"
              id="remember"
            />
            Remember for 30 days
          </label>
        </div>

        <Button
          onClick={() => {
            dispatch(setContent("forgot password"));
          }}
          className="font-semibold bg-transparent p-0 text-sm text-[#262b3a]"
        >
          Forgot Password
        </Button>
      </section>

      {/* Sign Up Section */}
      <div className="w-full mt-2">
        <p className="flex items-center text-[#475467] gap-1 justify-center">
          Don't have an account?{" "}
          <Button
            onClick={() => {
              dispatch(setContent("signup"));
              navigate("../signup");
            }}
            className="text-[#262b3a] font-semibold bg-transparent p-0"
          >
            Sign up
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Login;