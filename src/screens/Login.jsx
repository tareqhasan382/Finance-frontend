import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/auth/authApi";
import { toast } from "react-toastify";
import { useAdminLoginMutation, useAgentLoginMutation } from "../redux/agent/agentApi";
//useSignupMutation,useLoginMutation
function Login() {
  const navigate = useNavigate();
  const [login]= useLoginMutation();
  const [adminLogin]=  useAdminLoginMutation();
  const [agentLogin,{error}]= useAgentLoginMutation();

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
  
    if (data?.accountType === "user") {
    //  console.log("data:",data)
      const result = await login(data).unwrap(); 
     // console.log("result:", result);
      if (result?.status === "true") {
        navigate("/home");
        toast.success("Login successfully");
      } else if (result?.status == "false") {
        toast.error(`${result?.message}`);
       
      }
    } else if (data?.accountType === "agent") {
      //  console.log("data:",data)
      const result = await agentLogin(data).unwrap(); 
      if(error){
        console.log("error:",error)
      }
     // console.log("result:", result);
      if (result?.status === "true") {
        navigate("/home");
        toast.success("Login successfully");
      } else if (result?.status == "false") {
        toast.error(`${result?.message}`);
       
      }
    }else if(data?.accountType ==="admin"){
      const result = await adminLogin(data).unwrap();
      if(error){
        console.log("error:",error)
      }
     // console.log("result:", result);
      if (result?.status === "true") {
        navigate("/home");
        toast.success("Login successfully");
      } else if (result?.status == "false") {
        toast.error(`${result?.message}`);
       
      }
    }
  };

  return (
    <>
      <div className=" flex flex-col items-center justify-center min-h-screen ">
        <div>
          <h1 className=" text-3xl font-bold mb-4 text-center ">Sign In</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" py-10 rounded-lg shadow-lg flex flex-col bg-gray-200 px-6 md:px-10 "
          >
            
           
            <div className=" flex flex-col ">
              <label className=" mb-2 ">Phone Number</label>
              <input
                type="text"
                id="phone"
                placeholder="Enter your phone"
                {...register("phone", {
                  required: true,
                  pattern: /^[0-9]{11}$/,
                })}
                className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
              />
              {errors.phone && (
                <span className=" text-sm text-red-500 ">
                  Enter 11 digit Number
                </span>
              )}
            </div>
            <div className=" flex flex-col ">
              <label className=" mb-2 ">Enter 5 digit Pin</label>
              <input
                type="text"
                id="pin"
                placeholder="Enter your pin"
                {...register("pin", {
                  required: true,
                  pattern: /^[0-9]{5}$/,
                })}
                className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
              />
              {errors.pin && (
                <span className=" text-sm text-red-500 ">
                  Enter a valid 5-digit Number
                </span>
              )}
            </div>
           
            <div className=" flex flex-col ">
              <label className=" mb-2 ">Select AccountType</label>
              <select
                {...register("accountType")}
                className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
              >
                <option
                  value="user"
                  className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
                >
                  User
                </option>
                <option
                  value="agent"
                  className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
                >
                  Agent
                </option>
                <option
                  value="admin"
                  className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
                >
                  Admin
                </option>
              </select>
            </div>
            <button
              type="submit"
              className=" p-2 border rounded-lg bg-blue-500 text-white border-gray-300 mt-2 mb-4 focus:border-gray-600"
            >
              Login
            </button>
            <span className=" text-right ">New User ?
<Link to="/signup" className=" text-blue-600 underline pl-2 ">Signup</Link></span>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
