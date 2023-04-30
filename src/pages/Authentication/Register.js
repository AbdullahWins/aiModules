import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const { createNewUserEmail } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event?.target;
    const email = form?.email?.value;
    const password = form?.password?.value;

    createNewUserEmail(email, password)
      .then((result) => {
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error?.message);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-3xl">Hello there!</p>
      <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-aboutGradientStart to-aboutGradientEnd font-bold pb-10">
        Register to continue
      </h2>
      <div className="w-1/4 border-2 border-btnColor rounded-lg">
        <form className="px-10 py-12" onSubmit={handleSignup}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full font-bold"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full my-4 font-bold"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="input input-bordered w-full font-bold"
          />
          <button className="btn w-full rounded-full mt-6 bg-btnColor border-none">
            Login
          </button>
        </form>
      </div>
      <p className="text-xl text-center pt-4">
        Don't have an account?
        <span className="text-bold text-btnColor">
          <Link to="/login"> Login</Link>
        </span>
      </p>
    </div>
  );
};

export default Register;
