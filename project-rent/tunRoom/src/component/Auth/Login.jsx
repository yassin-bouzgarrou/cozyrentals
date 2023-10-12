import { Navbar } from "@material-tailwind/react";
import BlackLogo from "../../assets/img/black.png"
import { Link } from "react-router-dom";
  export function Login() {
    return (
      <>

        <div className="bg-gray-100 flex justify-center items-center h-screen ">
   
    <div className="w-1/2 h-screen hidden lg:block">
      <img src={BlackLogo} alt="Placeholder Image" className="object-cover w-full h-full"/>
    </div>

    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">

      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <form action="#" method="POST">
      
        <div className="mb-4">
          <label for="username" className="block text-gray-600">email</label>
          <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
        </div>

        <div className="mb-4">
          <label for="password" className="block text-gray-600">Password</label>
          <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
        </div>
 
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="remember" name="remember" className="text-blue-500"/>
          <label for="remember" className="text-gray-600 ml-2">Remember Me</label>
        </div>
 
        <div className="mb-6 text-blue-500">
          <a href="#" className="hover:underline">Forgot Password?</a>
        </div>
 
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
      </form>
  
      <div className="mt-6 text-blue-500 text-center">
        <Link to="/signup">Sign up Here  </Link>
     
      </div>
    </div>
    </div>
    </>
    );
  }
  
  export default Login;
  