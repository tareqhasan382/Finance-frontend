// CashOutMoneyModal
import { useState } from "react";
import PropTypes from "prop-types";

const CashOutMoneyModal = ({ isOpen, onClose, onSend }) => {
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");

  const handleSend = () => {
    // Call the onSend callback with the amount, pin, and any other data needed
    onSend({ amount, pin});
    // Close the modal
    onClose();
    setAmount("")
    setPin("")
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg">
            <h2 className="text-lg font-semibold mb-3">Send Money</h2>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border border-gray-300 rounded-md p-2 mb-3"
              placeholder="Enter amount"
            />
            <input
              type="text"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="border border-gray-300 rounded-md p-2 mb-3"
              placeholder="Enter PIN"
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Send
            </button>
            <button onClick={onClose} className="ml-2 text-gray-500">
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

CashOutMoneyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
};

export default CashOutMoneyModal;
