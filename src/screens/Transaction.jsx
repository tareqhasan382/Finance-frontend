import { useUserTransactionQuery } from "../redux/user/userApi";

const Transaction = () => {
  const {
    data: useUserTransac,
    isLoading: transactionLoading,
    isError: transactionError,
  } = useUserTransactionQuery();
  let transaction;

  if (!transactionError && !transactionLoading && useUserTransac) {
    transaction = useUserTransac;
  }
  //console.log("transaction:", transaction?.data);
  return (
    <div className="text-black px-5 max-w-[1280px] h-full mx-auto py-10 ">
      <div className=" flex flex-col items-center justify-center ">
        <h1 className=" text-center text-2xl font-semibold ">Transactions</h1>
        {transaction &&
          transaction?.data.map((item) => (
            <div key={item._id} className=" w-[80%] h-44  ">
              <div className=" py-5 bg-gray-300 px-5 rounded">
                <h3>Sender:{item?.sender}</h3>
                <h3>recipient:{item?.recipient}</h3>
                <h3>amount:{item?.amount}</h3>
                <h3>transactionFee:{item?.transactionFee}</h3>
                <h3>transactionType:{item?.transactionType}</h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Transaction;
