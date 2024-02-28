// useAllAgentsQuery,
// useApproveAgentMutation,

import { useAllAgentsQuery, useApproveAgentMutation } from "../redux/agent/agentApi";

const AllAgent = () => {
  const { data } = useAllAgentsQuery();
const [approveAgent]=useApproveAgentMutation();
const activeHandler = async (agent) => {
    console.log("agent:",agent)
    try {
      // Call the approveAgent mutation
      const response = await approveAgent();
      // Handle success or additional logic if needed
      console.log("Agent approved successfully:", response);
    } catch (error) {
      // Handle error
      console.error("Error approving agent:", error);
    }
  };
  return (
    <div className="text-black px-5 max-w-[1280px] h-full mx-auto py-10 ">
      <div className=" flex flex-col items-center justify-center ">
        <h1 className=" text-center text-2xl font-semibold ">All Agents</h1>
        {data &&
          data?.data.map((agent) => (
            <div key={agent._id} className=" w-[80%] h-44  ">
              <div className="py-5 bg-gray-300 px-5 rounded flex justify-between">
  <div>
    <h3>{agent?.name}</h3>
    <h3>{agent?.email}</h3>
    <h3>{agent?.phone}</h3>
    <h3>{agent?.
isApproved
}</h3>
  </div>
  <div className="flex flex-col justify-around">
    <button onClick={()=>activeHandler(agent)} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2">Active</button>
    <button className="bg-red-500 text-white px-4 py-2 rounded-md">Block</button>
  </div>
</div>


            </div>
          ))}
      </div>
    </div>
  );
};

export default AllAgent;
