import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="text-black bg-white min-h-screen flex items-center justify-center">
        <div className="modal-box">
          <Link
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            to="/"
          >
            ✕
          </Link>
          <div className="w-full h-full  p-10 pt-5 pb-5">
            <h3 className="font-bold text-2xl mb-3 text-center">Sign Up</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="">
                <div className=" mb-5 h-10 flex justify-between items-center">
                  <span>Name</span>
                  <input
                    type="name"
                    className="h-full w-[80%] bg-transparent  outline-none border-b-2 border-black border-solid text-xl p-3"
                    placeholder="Name"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Not a valid User Name",
                      },
                      minLength: {
                        value: 4,
                        message: "Minimum length must be 4 ",
                      },
                    })}
                  />
                </div>
                {errors.name && (
                  <div className="text-red-600 text-sm text-center">
                    {errors.name.message}
                  </div>
                )}
                <div className=" mb-5 h-10 flex justify-between items-center">
                  <span>Email </span>
                  <input
                    type="email"
                    className="h-full w-[80%] bg-transparent  outline-none border-b-2 border-black border-solid text-xl p-3"
                    placeholder="User@gmail.com"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Not a valid E-mail",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <div className="text-red-600 text-sm text-center">
                    {errors.email.message}
                  </div>
                )}
                <div className=" mb-5 h-10 flex justify-between items-center">
                  <span>Password </span>
                  <input
                    type="password"
                    className="h-full w-[80%] bg-transparent  outline-none border-b-2 border-black border-solid text-xl p-3"
                    placeholder="Password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Not a valid Password",
                      },
                      minLength: {
                        value: 8,
                        message: "Minimum length must be 8 ",
                      },
                    })}
                  />
                </div>
                {errors.password && (
                  <div className="text-red-600 text-sm text-center">
                    {errors.password.message}
                  </div>
                )}
                {errors.myform && (
                  <div className="text-red-600 text-sm text-center">
                    Something Wents wrong
                  </div>
                )}
              </div>
              <div className="flex mt-8 justify-between">
                <div className="butn ">
                  {" "}
                  <button className="btn btn-secondary px-5 py-0">
                    Sign Up
                  </button>
                </div>
                <div className="mt-6 top-0">
                  Have an Account{" "}
                  <span
                    className="text-blue-500 font-semibold text-[1.1rem] underline cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </span>
                </div>
              </div>
            </form>
            <Login />
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default signup;
