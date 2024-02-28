
import { Link } from "react-router-dom";
import coverImage from "./assets/bank-cover.png"; 
const App = () => {
  return (
<main style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust height as needed
      }}>
 <div className=" text-white min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-md px-4 py-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Our Bank</h2>
        <p className=" mb-6">Discover our range of services designed to meet your financial needs.</p>
       <Link to="/home">
       <button  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Get Started</button>
       </Link>
      </div>
    </div>
</main>
  )
}

export default App