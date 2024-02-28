import { MdSendToMobile } from "react-icons/md";
import { SiBitcoincash } from "react-icons/si";
import { FaSackDollar } from "react-icons/fa6";
import BlurredBalance from "../components/BlurredBalance";
import { useUserProfileQuery } from "../redux/user/userApi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAgentProfileQuery } from "../redux/agent/agentApi";
import AgentBlurred from "../components/AgentBlurred";

const Home = () => {
  const user = useSelector((state) => state.auth.user);


  const { data, isLoading, isError } =  useUserProfileQuery() ;
  const { data:agentData } =  useAgentProfileQuery() ;
 // console.log("agentData:",agentData?.data?.balance)
  let balance;
  if (!isError && !isLoading && data) {
    balance = data?.data?.balance;
  }
  let agentBalance;
  if(agentData){
    agentBalance=agentData?.data?.balance
  }
  console.log("agentBalance:",agentBalance)
  return (
    <div className=" text-black px-5 max-w-[1280px] h-full mx-auto py-10 ">
      {user && user?.role === "agent" && (
        <>
          <div className=" ">
            <h1 className=" lg:px-24 px-1 line-clamp-2 space-y-2 text-blue-600 pt-16 text-center text-wrap font-semibold lg:text-6xl text-2xl ">
              Easily manage your bank accounts and finances online
            </h1>
            <h1 className="mt-28 text-center text-3xl font-semibold mb-8 ">
              Popular services Agent
            </h1>
            <div className=" flex flex-wrap items-center justify-center gap-10  ">
              <div className=" flex flex-col items-center justify-center h-56 w-56  duration-200 rounded-md outline-1 outline outline-gray-500 ">
                <h3 className=" text-black text-center font-semibold ">
                  Balance 
                </h3>
                <AgentBlurred agentBalance={ agentBalance ? agentBalance : 0 } />
                <SiBitcoincash size={50} />
              </div>
              <Link to="/agents">
                <div className=" flex flex-col items-center justify-center h-56 w-56 bg-white hover:bg-gray-200 duration-200 rounded-md outline-1 outline outline-gray-500 ">
                  <h3 className=" text-black text-center font-semibold ">
                    Cash request
                  </h3>
                  <FaSackDollar size={50} />
                </div>
              </Link>

              <Link to="/chasIn">
                <div className=" flex flex-col items-center justify-center h-56 w-56 bg-white hover:bg-gray-200 duration-200 rounded-md outline-1 outline outline-gray-500 ">
                  <h3 className=" text-black text-center font-semibold ">
                    Cash In
                  </h3>
                  <MdSendToMobile size={60} />
                </div>
              </Link>
              <Link to="/agentTransaction">
                <div className=" flex flex-col items-center justify-center h-56 w-56 bg-white hover:bg-gray-200 duration-200 rounded-md outline-1 outline outline-gray-500 ">
                  <h3 className=" text-black text-center font-semibold ">
                    Transaction Histry
                  </h3>
                  <SiBitcoincash size={50} />
                </div>
              </Link>
            </div>
          </div>
        </>
      )}
      {user && user?.role === "user" && (
        <>
          <div className=" ">
            <h1 className=" lg:px-24 px-1 line-clamp-2 space-y-2 text-blue-600 pt-16 text-center text-wrap font-semibold lg:text-6xl text-2xl ">
              Easily manage your bank accounts and finances online
            </h1>
            <h1 className="mt-28 text-center text-3xl font-semibold mb-8 ">
              Popular services
            </h1>
            <div className=" flex flex-wrap items-center justify-center gap-10  ">
              <div className=" flex flex-col items-center justify-center h-56 w-56  duration-200 rounded-md outline-1 outline outline-gray-500 ">
                <h3 className=" text-black text-center font-semibold ">
                  Cash In
                </h3>
                <BlurredBalance balance={balance ? balance : 0} />
                <SiBitcoincash size={50} />
              </div>
              <Link to="/agents">
                <div className=" flex flex-col items-center justify-center h-56 w-56 bg-white hover:bg-gray-200 duration-200 rounded-md outline-1 outline outline-gray-500 ">
                  <h3 className=" text-black text-center font-semibold ">
                    Cash Out
                  </h3>
                  <FaSackDollar size={50} />
                </div>
              </Link>

              <Link to="/users">
                <div className=" flex flex-col items-center justify-center h-56 w-56 bg-white hover:bg-gray-200 duration-200 rounded-md outline-1 outline outline-gray-500 ">
                  <h3 className=" text-black text-center font-semibold ">
                    Send Money
                  </h3>
                  <MdSendToMobile size={60} />
                </div>
              </Link>
              <Link to="/transaction">
                <div className=" flex flex-col items-center justify-center h-56 w-56 bg-white hover:bg-gray-200 duration-200 rounded-md outline-1 outline outline-gray-500 ">
                  <h3 className=" text-black text-center font-semibold ">
                    Transaction Histry
                  </h3>
                  <SiBitcoincash size={50} />
                </div>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
// Transaction
