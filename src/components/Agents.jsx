import { useState } from "react"
import { useAgentsQuery, useCashOutMutation } from "../redux/user/userApi"
import CashOutMoneyModal from "./CashOutMoneyModal"
import { toast } from "react-toastify"


const Agents = () => {
    const {data,isError,isLoading}=useAgentsQuery()
    const [cashOut,{error}]=useCashOutMutation()
    //==========================================
   
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  // amount, pin, recipientPhone
    const handleSendMoney = (user) => {
      setSelectedUser(user);
      setIsModalOpen(true);
    };
   // console.log("error:",error?.data)
    
    const handleSend = async({ amount, pin}) => {
      const data ={
          amount,
          pin,
          recipientPhone:selectedUser.phone
      }
    
      const result = await cashOut(data);
      if(result.error){
       // console.log("result:",result?.error?.data?.message)
       toast.warning(result?.error?.data?.message)
      }
     
      if(error){
        toast.warning(error.data.message)
      }
      toast.success(result?.data?.message)
        
      
    };
   
  return (
    <div className="text-black px-5 max-w-[1280px] h-full mx-auto py-10 ">
      <h3 className="text-center font-semibold text-2xl">All Agents</h3>
      <div className="flex flex-wrap h-screen ">
        {data && !isError && !isLoading &&
          data?.data.map((user) => (
            <div
              key={user._id}
              className=" w-60 h-56 bg-black text-white m-5 p-3 rounded"
            >
              <h3>{user?.name}</h3>
              <h3>{user?.phone}</h3>
              <h3>{user?.createdAt}</h3>
              <button onClick={() => handleSendMoney(user)} className="bg-blue-500 text-white px-4 py-2 rounded-md my-3">CashOut</button>
            </div>
          ))}
      </div>
      <CashOutMoneyModal
        isOpen={isModalOpen}
        onClose={()=>setIsModalOpen(false)}
        onSend={handleSend}
      />
    </div>
  )
}

export default Agents