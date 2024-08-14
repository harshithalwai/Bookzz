import React from "react";
import { useForm } from "react-hook-form";

const contactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="min-h-screen  w-full flex justify-center items-center">
        <div className=" w-[35%]">
          <div className="border-2 rounded-tl-3xl rounded-br-3xl p-10">
            <h1 className="font-bold text-2xl mb-3 ">Contact Us</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-[1.1rem] flex flex-col gap-1 pl-3 mt-3">
                <span className="font-semibold">Name</span>
                <div className="inp w-full">
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="border outline-none bg-transparent w-full rounded-xl p-2 px-3"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Not a valid Name",
                      },
                    })}
                  />
                </div>
              </div>
              <div className="text-[1.1rem] flex flex-col gap-1 pl-3 mt-3">
                <span className="font-semibold">E-mail</span>
                <div className="inp w-full">
                  <input
                    type="email"
                    placeholder="Enter your E-mail"
                    className="border outline-none bg-transparent w-full rounded-xl p-2 px-3"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Not a valid E-mail",
                      },
                    })}
                  />
                </div>
              </div>
              <div className="text-[1.1rem] flex flex-col gap-1 pl-3 mt-3">
                <span className="font-semibold">Message</span>
                <div className="w-full">
                  <textarea
                    className="border outline-none bg-transparent w-full rounded-xl p-2 px-3 resize-none"
                    rows={4}
                    placeholder="Type your Message .."
                    {...register("message", {
                      required: {
                        value: true,
                        message: "Please Enter the Message",
                      },
                    })}
                  ></textarea>
                </div>
              </div>
              {(errors.name || errors.email || errors.message ||errors.myform) && (
                    <div className="text-red-600 text-sm text-center font-semibold">
                      Something Went Wrong ....
                    </div>
                  )}
              <div className="butn mt-5">
                {" "}
                <button className="btn text-white px-5 py-0 btn-info">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default contactForm;
