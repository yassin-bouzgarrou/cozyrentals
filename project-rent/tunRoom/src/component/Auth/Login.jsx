
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import BlackLogo from "../../assets/img/black.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Login() {
  const [email, setemail] = useState("");
  const [passowrd, setpassword] = useState("");
const navigate = useNavigate()


  async function login() {

    try {
      const token = await axios.post("http://localhost:3000/auth/signin", {
        email: email,
        password: passowrd,
        role: "GUEST",
      });
      toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT
    });
      navigate("/");
            localStorage.setItem("token",token.data.acces_token)

    } catch (error) {
   
    if(error.response.data.message === "your email not valid "){
      toast.error("Sorry, we didn't recognize that email.", {
        position: toast.POSITION.TOP_RIGHT
    })
    }else{
      toast.error("Password Incorrect", {
        position: toast.POSITION.TOP_RIGHT
    })
    }
    }
    
  }
  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center h-screen ">
        <div className="w-1/2 h-screen hidden lg:block">
          <img
            src={BlackLogo}
            alt="Placeholder Image"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>

          <div className="mb-4">
            <label for="email" className="block text-gray-600">
              email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>

          <div className="mb-4">
            <label for="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-blue-500"
            />
            <label for="remember" className="text-gray-600 ml-2">
              Remember Me
            </label>
          </div>

          <div className="mb-6 text-blue-500">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            onClick={login}
          >
            Login
          </button>
          <ToastContainer />

          <div className="mt-6 text-blue-500 text-center">
            <Link to="/signup">Sign up Here </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
