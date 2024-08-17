import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    // console.log(data, userInfo);

    axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((result) => {
        if (result.data) {
          console.log(result.data);
          toast.success("User Loggined Successfully");
        }
        localStorage.setItem("Users", JSON.stringify(result.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error : " + err.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="text-black">
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="w-full h-full  md:p-10 pt-5 pb-5">
              <h3 className="font-semibold text-2xl mb-3 text-center">Login</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                  <div className=" mb-5 h-10 flex justify-between items-center gap-[40px]">
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

                  <div className=" mb-5 h-10 flex justify-between items-center gap-[15px]">
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
                      })}
                    />
                  </div>
                  {(errors.email || errors.password || errors.myform) && (
                    <div className="text-red-600 text-sm text-center font-semibold">
                      Your E-mail or Password are incorrect
                    </div>
                  )}
                </div>
                <div className="flex mt-8 justify-between flex-col md:flex-row">
                  <div className="butn ">
                    {" "}
                    <button className="btn btn-secondary px-5 py-0">
                      Login
                    </button>
                  </div>
                  <div className="mt-6 top-0">
                    Don&apos;t have an Account{" "}
                    <Link
                      className="text-blue-500 font-semibold text-[1.1rem] underline"
                      to="/signup"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>{" "}
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
