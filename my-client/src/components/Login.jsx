import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contacts/AuthProvider';
import googleLogo from "../assets/google-logo.svg";

const Login = () => {
  const { login, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState(""); // Correct setter function name

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage); // Update error state with message
      });
  }

  // Sign up using Google
  const handleRegister = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        alert("Signed Up Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage); // Update error state with message
      });
  }

  return (
    <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div className="text-center mb-12">
          <h1 className='text-3xl font-bold'>Login Page</h1>
        </div>

        <form onSubmit={handleLogin}>
          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
              <input name="email" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <input name="password" type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" />
            </div>
          </div>

          <div className="mt-12">
            <button type="submit" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Login
            </button>
          </div>

          {/* Correct conditional rendering for error message */}
          {error && <p className='text-red-700'>{error}</p>}

          <p className="text-gray-800 text-sm mt-6 text-center">Don't have an account? <Link to="/register" className='text-blue-700 underline'>Register </Link>Here</p>
        </form>

        <hr />
        
        <div className='flex w-full items-center flex-col mt-5 gap-3'>
          {/* Correct onClick handler to use handleRegister for Google login */}
          <button onClick={handleRegister} className='block'>
            <img src={googleLogo} alt="Google Logo" className='w-12 h-12 inline-block' />
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
