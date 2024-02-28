import  { useState } from "react";
import PropTypes from "prop-types";

const BlurredBalance = ({ balance }) => {
  const [isBlurred, setIsBlurred] = useState(true);

  const toggleBlur = () => {
    setIsBlurred(!isBlurred);
  };

  return (

<div onClick={toggleBlur} className="cursor-pointer bg-black relative ">
      {isBlurred ? (
        <div className="filter blur-md">
          <span className=" text-white z-10 ">Click to reveal balance</span>
        </div>
      ) : (
        <div>
          <span className="text-white font-bold text-xl px-2 ">Balance: $ {balance}</span>
        </div>
      )}
    </div>

  );
};

BlurredBalance.propTypes = {
  balance: PropTypes.any.isRequired,
};

export default BlurredBalance;
