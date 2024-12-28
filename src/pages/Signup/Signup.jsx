import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../component/Input/Input";
import { Link } from "react-router";
import Button from "../../component/Button/Button";
import Logo from "../../component/Logo/Logo";
import { useSelector } from "react-redux";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState();

  const onSubmit = (data) => {
    console.log(data);
  };

  const theme = useSelector((state)=> state.theme.theme)


  return (
    <div className={`flex justify-center overflow-y-auto items-center ${theme === "light" ? "bg-slate-200" :"bg-slate-800"} w-full  lg:w-10/12 p-3 md:p-0`} style={{height: '875px'}}>  
      <div className={`w-full max-w-lg  mx-auto ${theme === "light" ? "bg-white border-slate-300" :"bg-cyan-950 border-slate-600"} shadow-lg rounded-lg border border-slate-300 p-10 flex flex-col gap-5`}>
      <div className="flex justify-center items-center">
         <Logo width={'w-20'}/>
         </div>
        <h1 className="text-center text-2xl font-bold">
          Sign In 
        </h1>

        {error && <p className="text-center text-red-500 ">{error.message}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <Input
            label="Full Name :"
            type="text"
            placeholder="Enter you full name"
            {...register("name", {
              required: true,
            })}
            aria-invalid={errors.name ? "true" : "false"}
            invalid={errors.name ? true : false}
          />
          {errors.name?.type === "required" && (
            <p role="alert" className="text-red-500">
              Full name is required
            </p>
          )}
          <Input
            label="Email :"
            type="email"
            placeholder="Enter you email"
            {...register("email", {
              required: true,
              validate: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            })}
            aria-invalid={errors.email ? "true" : "false"}
            invalid={errors.email ? true : false}
          />
          {errors.email?.type === "required" && (
            <p role="alert" className="text-red-500">
              Email is required
            </p>
          )}
          <Input
            label="Phone :"
            type="number"
            placeholder="Enter you phone"
            {...register("phone", {
              required: true,
              maxLength: 10,
            })}
            aria-invalid={errors.phone ? "true" : "false"}
            invalid={errors.phone ? true : false}
          />

          {errors.phone?.type === "required" && (
            <p role="alert" className="text-red-500">
              Phone Number is required
            </p>
          )}

          <Input
            label="Password :"
            type="password"
            placeholder="Enter you password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            aria-invalid={errors.password ? "true" : "false"}
            invalid={errors.password ? true : false}
          />

          {errors.password?.type === "required" && (
            <p role="alert" className="text-red-500">
              Password is required
            </p>
          )}
          <Button type="submit" bgColor="bg-violet-400" textColor="text-white">
            Sign Up
          </Button>
        </form>
        <p className="text-center ">
          Already had account&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
