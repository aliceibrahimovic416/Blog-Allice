import React, { FC } from "react";
// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { RouteComponentProps } from "react-router";


type SomeComponentProps = RouteComponentProps;

const Login: FC<SomeComponentProps> = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const login = (data: any) => {
    let params = {
      email: data.email,
      password: data.password,
    };

    const passwordverify="";
    if(localStorage.auth){
      const auth=localStorage.getItem('auth');
      console.log(auth);
    const token=JSON.parse(`${auth}`);
      if(token.email===params.email&&token.password===params.password){
        router.push('/Auth/dashboard');
      }
      else if(token.email!==params.email){
        const emailverify="Email is not true";
        alert("Could't find your email")
      }
      else if(token.password!==params.password){
        const passwordverify ="Password is not true";
        alert("password is not true")
      }
    }
  };
  
  const img=require('../../public/images/background.jpg');
  const styling = {
    backgroundImage: `url(${img})`,
    width:"100%",
    height:"100%"
  }

  return (
    < >
      <div className="container-fluid h-full z-10" style={styling}>

        <div
          className="grid grid-cols-12 mt-20 text-white"
        >
          <div className="col-start-5 bg-[#172554] col-span-4 mb-3 p-10 border-solid border-white border-2 hover:border-dotted" >
            <div className="">
              <div className="">
                <h3 className="text-center mb-5 text-3xl">
                  Login Form
                </h3>
                <form autoComplete="off" onSubmit={handleSubmit(login)}>
                  <div className="my-5">
                    <label className="form-label text-2xl">Email</label>
                    <input
                      type="email"
                      className="caret-blue-500  text-black px-3 md:caret-indigo-500 w-full my-5  rounded-lg placeholder:italic placeholder:text-slate-400 text-2xl"
                      id="exampleFormControlInput1"
                      
                      {...register("email", { required: "Email is required!" })}
                    />
                    {errors.email && (
                      <p className="text-red" style={{ fontSize: 14 }}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="my-5">
                    <label className="form-label text-2xl">Password</label>
                    <input
                      type="password"
                      className="caret-blue-500 px-3 text-black md:caret-indigo-500 w-full my-5  rounded-lg placeholder:italic placeholder:text-slate-400 text-2xl"
                      id="exampleFormControlInput2"
                      
                      {...register("password", {
                        required: "Password is required!",
                      })}
                    />
                    {errors.password && (
                      <p className="text-red" style={{ fontSize: 14 }}>
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="text-center mt-4 ">
                    <button
                      className="mb-3 bg-teal-300 w-1/2 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      type="submit"
                    >
                      <span className="text-2xl">Login</span>
                    </button>
                    <p className="card-text pb-2">
                      Have an Account?{" "}
                      <a href="/Auth/Register">SignUp</a>
                      {/* <Link style={{ textDecoration: "none" }} to={"/register"}>
                        Sign Up
                      </Link> */}
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
export default Login;