import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contacts/AuthProvider'
import googleLogo from "../assets/google-logo.svg"

const SignUp = () => {
  const {createUser,loginWithGoogle}=useContext(AuthContext);
  const [error,serError]=useState("error");

  const location=useLocation();
  const navigate=useNavigate();

  const from=location.state?.from?.pathname || "/";

  const handleSignUp=(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    
    createUser(email,password).then((userCredential)=>{
      const user=userCredential.user;
      alert("Signed Up Succeessfully");
      navigate(from,{replace:true});
    })
    .catch((error)=>{
      const errorCode=error.code;
      const errorMessage=error.message;
      serError(errorMessage);
    });
  }


  //sign up using google
  const handleRegister=()=>{
      loginWithGoogle().then((result)=>{
        const user=result.user;
        alert("Signed Up Succeessfully");
        navigate(from,{replace:true});
      })
      .catch((error)=>{
        const errorCode=error.code;
        const errorMessage=error.message;
        serError(errorMessage);
      });
  }

  return (
    <div class="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div class="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div class="text-center mb-12">
          <h1 className='text-3xl text-bold'>Sign Up form</h1>
        </div>

        <form onSubmit={handleSignUp}>
          <div class="space-y-6">
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Email Id</label>
              <input name="email" type="text" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Password</label>
              <input name="password" type="password" class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" />
            </div>

            
          </div>

          <div class="!mt-12">
            <button type="submit" class="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Sign Up
            </button>
          </div>
          <p class="text-gray-800 text-sm mt-6 text-center">Already have an account? <Link to="/login" className='text-blue-700 underline'>Login </Link>Here</p>
        </form>
        <hr/>
        <div className='flex w-full items-center flex-col mt-5 gap-3'>
          <button onClick={handleRegister} className='block'><img src={googleLogo} alt="" className='w-12 h-12 inline-block'/>Login With Google</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
