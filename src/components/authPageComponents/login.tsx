import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setContent, setRouteFromLogin } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { welcomeMessage } from "../layouts/userAuth";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

const loginSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log("Form Data:", data);
    dispatch(setRouteFromLogin(true));
    navigate("../../dashboard/user");
  };

  return (
    <div className="login-container font-[Inter] sm:w-10/12 px-1 sm:mx-auto md:flex block flex-col justify-center h-full md:h-screen md:overflow-y-hidden max-md:pl-0 max-lg:pl-5">
      {welcomeMessage()}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="pt-10  flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }: { field: any }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    className="rounded-[20px] py-5 md:py-[23px] font-[Inter] max-md:w-full text-lg focus:border-0 text-black border-[#d0d5dd]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }: { field: any }) => (
              <FormItem className="relative border-0">
                <FormControl className="relative border-0">
                  <div className="relative border-0">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="rounded-[20px] font-[Inter] py-5 md:py-[23px] pr-12 border text-black outline-0 border-[#d0d5dd] shadow-0 focus:outline-0  focus:border-0    w-full"
                      {...field}
                    />
                    <Button
                      type="button"
                      className="absolute  right-1 top-1/2 bg-transparent hover:bg-none rounded-none shadow-none text-[#b7b7b7]  transform -translate-y-1/2"
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

          <Button type="submit" className="py-5 md:py-[23px] font-[Inter] rounded-[20px]">
            Login
          </Button>
        </form>
      </Form>

      <section className="flex justify-between items-center pt-0">
        <div>
          <label
            className="flex gap-2 justify-start items-center text-sm text-nowrap"
            htmlFor="remember"
          >
            <Checkbox
              className=" border-2  p-2 border-gray-300 rounded-md checked:bg-transparent   bg-transparent  data-[state=checked]:bg-transparent data-[state=checked]:text-black  "
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
          className="font-semibold hover:bg-none bg-transparent shadow-none p-0 text-sm text-[#262b3a]"
        >
          Forgot Password
        </Button>
      </section>

      <div className="w-full mt-2">
        <p className="flex items-center text-[#475467] gap-1 justify-center">
          Don't have an account?{" "}
          <Button
            onClick={() => {
              dispatch(setContent("signup"));
              navigate("../signup");
            }}
            className="text-[#262b3a] hover:bg-none shadow-none font-semibold bg-transparent p-0"
          >
            Sign up
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Login;
