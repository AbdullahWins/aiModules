import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  // changing the webpage title dynamically
  document.title = `${process.env.REACT_APP_ApplicationName} | Register`;

  const { createNewUserEmail, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const errorToast = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event?.target;
    const email = form?.email?.value;
    const password = form?.password?.value;
    const confirmPassword = form?.confirmPassword?.value;

    if (password === confirmPassword) {
      createNewUserEmail(email, password)
        .then((result) => {
          form.reset();
          navigate(from, { replace: true });
        })
        .catch((error) => {
          errorToast("Invalid e-mail");
        });
    } else {
      errorToast("Passwords didn't match!");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <p className="text-3xl">Hello there!</p>
      <h2 className="text-xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-aboutGradientStart to-aboutGradientEnd font-bold pb-10">
        Register to continue
      </h2>
      <div className="w-3/4 md:w-2/4 lg:w-[476px] border border-btnColor rounded-3xl">
        <form className="px-10 py-12" onSubmit={handleSignup}>
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full font-bold"
          />
          <input
            required
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full my-4 font-bold"
          />
          <input
            required
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="input input-bordered w-full font-bold"
          />
          <button
            disabled={loading}
            className="btn w-full rounded-full mt-6 bg-btnColor border-none"
          >
            Register
          </button>
        </form>
      </div>
      <p className="text-base md:text-xl text-center pt-4">
        Don't have an account?
        <span className="text-bold text-btnColor">
          <Link to="/login"> Login</Link>
        </span>
      </p>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Register;
