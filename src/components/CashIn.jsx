import { useState } from "react";
import { useAgentCashInMutation } from "../redux/agent/agentApi";
import { useUsersQuery } from "../redux/user/userApi";
import SendMoneyModal from "./SendMoneyModal"
import { toast } from "react-toastify";


const CashIn = () => {
    const [agentCashIn,{error}] = useAgentCashInMutation();

  const { data, isLoading, isError } = useUsersQuery();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  let users;
  if (!isLoading && !isError && data) {
    users = data?.data;
  }
 //console.log("error:",error)
  const handleSendMoney = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };
  
  const handleSend = async({ amount, pin}) => {
    const data ={
        amount,
        pin,
        recipientPhone:selectedUser.phone
    }
    const result = await agentCashIn(data)
    if(error){
        toast.warning(error?.data?.message)
      }
      toast.success(result?.data?.message)
   //console.log("Sending money result:", result);
    // Implement send money logic here
  };
  return (
    <div className="text-black px-5 max-w-[1280px] h-[100vh] mx-auto py-10 ">
      <h3 className="text-center font-semibold text-2xl">All Users</h3>
      <div className="flex flex-wrap">
        {users &&
          users.map((user) => (
            <div
              key={user._id}
              className="w-40 h-40 bg-black text-white m-5 p-3 rounded"
            >
              <h3>{user?.name}</h3>
              <h3>{user?.phone}</h3>
              <h3>{user?.createdAt}</h3>
              <button onClick={() => handleSendMoney(user)} className="bg-blue-500 text-white px-4 py-2 rounded-md">Send Money</button>
            </div>
          ))}
      </div>
      <SendMoneyModal
        isOpen={isModalOpen}
        onClose={()=>setIsModalOpen(false)}
        onSend={handleSend}
      />
    </div>
  )
}

export default CashIn