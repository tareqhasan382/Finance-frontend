import { useForm } from "react-hook-form";
import { Link, useNavigate,  } from "react-router-dom";
import { useSignupMutation } from "../redux/auth/authApi";
import { toast } from "react-toastify";
import { useAdminSignupMutation, useAgentSignupMutation } from "../redux/agent/agentApi";
//useAgentSignupMutation,useAgentLoginMutation
function Signup() {
  const navigate = useNavigate();
  const [signup,{ isLoading }]= useSignupMutation();
  const [adminSignup]= useAdminSignupMutation();
  const [agentSignup,{ error }]= useAgentSignupMutation();
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
  
    if (data?.accountType === "user") {
      const result = await signup(data).unwrap(); 
      console.log("result:", result);
      if (result?.status === "true") {
        navigate("/login");
        toast.success("Account created successfully");
      } else if (result?.status == "false") {
        toast.error(`${result?.message}`);
       
      }
    } else if (data?.accountType === "agent") {
      const result = await agentSignup(data).unwrap(); 
      if(error){
        console.log("error:",error)
      }
      console.log("result:", result);
      if (result?.status === "true") {
        navigate("/login");
        toast.success("Account created successfully");
      } else if (result?.status == "false") {
        toast.error(`${result?.message}`);
       
      }
    }else if(data?.accountType ==="admin"){
      const result = await adminSignup(data).unwrap(); 
      if(error){
        console.log("error:",error)
      }
      console.log("result:", result);
      if (result?.status === "true") {
        navigate("/login");
        toast.success("Account created successfully");
      } else if (result?.status == "false") {
        toast.error(`${result?.message}`);
       
      }
    }
  };
// useSignupMutation,useLoginMutation
  return (
    <>
      <div className=" flex flex-col items-center justify-center min-h-screen py-24 ">
        <div>
          <h1 className=" text-3xl font-bold mb-4 text-center ">Create an account</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" py-10 rounded-lg shadow-lg flex flex-col bg-gray-200 px-6 md:px-10 "
          >
            <div className=" flex flex-col ">
              <label className=" mb-2 ">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                {...register("name", { required: true })}
                className="  p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
              />
              {errors.name && (
                <span className=" text-sm text-red-500 ">
                  This field is required
                </span>
              )}
            </div>
            <div className=" flex flex-col ">
              <label className=" mb-2 ">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
                className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
              />
              {errors.email && (
                <span className=" text-sm text-red-500 ">
                  This field is required
                </span>
              )}
            </div>
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
              <label className=" mb-2 ">Enter 10-digit NID Number</label>
              <input
                type="text"
                id="nid"
                placeholder="Enter your nid"
                {...register("nid", {
                  required: true,
                  pattern: /^[0-9]{10}$/,
                })}
                className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
              />
              {errors.nid && (
                <span className=" text-sm text-red-500 ">
                  Enter 10-digit NID Number
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
            disabled={isLoading}
              type="submit"
              className=" p-2 border  rounded-lg bg-blue-500 text-white border-gray-300 mt-2 mb-4 focus:border-gray-600"
            >
              Submit
            </button>
<span className=" text-right ">Already havr an account ?
<Link to="/login" className=" text-blue-600 underline pl-2 ">Signin</Link></span>
          </form>

        </div>
      </div>
    </>
  );
}

export default Signup;
