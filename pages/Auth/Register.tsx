import React, { FC } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import axios from "axios";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

type SomeComponentProps = RouteComponentProps;

const SignUp: FC<SomeComponentProps> = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const submitData = (data: any) => {
    let params = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      confirmpassword: data.cpassword,
    };
    console.log(data);
    axios
      .post("http://localhost:3000/Auth/Register", params)
      .then(function (response) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: 0,
          toastId: "my_toast",
        });

        localStorage.setItem("auth", JSON.stringify(params));
        reset();       
        router.push("/Auth/Login");

      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container-fluid h-full">
        <div
          className="grid grid-cols-12 mt-20  text-white"
        >
          <div className="col-start-4 bg-[#172554] col-span-6 mb-3 p-10 border-solid border-white border-2 hover:border-dotted">
            <div className="">
              <div className="">
                <h3 className="text-center mb-5 text-3xl">
                  Sign Up Form
                </h3>
                <form
                  autoComplete="off"
                  onSubmit={handleSubmit(submitData)}
                >
                  <div className="my-3">
                      <label className="form-label text-2xl">Firstname</label>
                      <input
                        type="text"
                        className="caret-blue-500 px-3 md:caret-indigo-500 w-full my-3  rounded-lg placeholder:italic placeholder:text-slate-400 text-2xl text-black"
                        id="exampleFormControlInput1"
                        {...register("firstname", {
                          required: "Firstname is required!",
                        })}
                      />
                      {errors.firstname && (
                        <p className="text-red" style={{ fontSize: 14 }}>
                          {errors.firstname.message}
                        </p>
                      )}
                  </div>
                  <div className="my-3">
                      <label className="form-label text-2xl">Lastname</label>
                      <input
                        type="text"
                        className="caret-blue-500 px-3 md:caret-indigo-500 w-full my-3  text-black rounded-lg placeholder:italic placeholder:text-slate-400 text-2xl"
                        id="exampleFormControlInput2"
                        {...register("lastname", {
                          required: "Lastname is required!",
                        })}
                      />
                      {errors.lastname && (
                        <p className="text-red" style={{ fontSize: 14 }}>
                          {errors.lastname.message}
                        </p>
                      )}
                  </div>
                  <div className="">
                    <label className="form-label text-2xl">Email</label>
                    <input
                      type="email"
                      className="caret-blue-500 px-3 md:caret-indigo-500 w-full text-black my-3  rounded-lg placeholder:italic placeholder:text-slate-400 text-2xl"
                      id="exampleFormControlInput3"
                      {...register("email", { required: "Email is required!" })}
                    />
                    {errors.email && (
                      <p className="text-red" style={{ fontSize: 14 }}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="my-3">
                    <label className="form-label text-2xl">Password</label>
                    <input
                      type="password"
                      className="caret-blue-500 px-3 md:caret-indigo-500 w-full text-black my-3  rounded-lg placeholder:italic placeholder:text-slate-400 text-2xl"
                      id="exampleFormControlInput5"
                      {...register("password", {
                        required: "Password is required!",
                      })}
                    />
                    {errors.password && (
                      <p className="text-res" style={{ fontSize: 14 }}>
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="form-label text-2xl">Confirm Password</label>
                    <input
                      type="password"
                      className="caret-blue-500 px-3 md:caret-indigo-500 text-black w-full my-3  rounded-lg placeholder:italic placeholder:text-slate-400 text-2xl"
                      id="exampleFormControlInput6"
                      {...register("cpassword", {
                        required: "Confirm Password is required",
                        validate: (value) =>
                          value === watch("password") ||
                          "Passwords don't match.",
                      })}
                    />
                    {errors.cpassword && (
                      <p className="text-red" style={{ fontSize: 14 }}>
                        {errors.cpassword.message}
                      </p>
                    )}
                  </div>
                  <div className="text-center mt-4 ">
                    <button
                      className="mb-3 bg-teal-300 w-1/2 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      type="submit"
                    >
                      <span className="text-2xl">Register</span>
                    </button>
                    <p className="card-text pb-2">
                      Already have an account?{" "}
                      <a href="/Auth/Login">Login</a>
                      {/* <Link style={{ textDecoration: "none" }} to={"/login"}> */}
                         
                      {/* </Link> */}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        limit={1}
        transition={Flip}
      />
    </>
  );
};
export default SignUp;