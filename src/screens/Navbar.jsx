import { useState } from "react";
import { Link } from "react-router-dom"
// import { BiSolidUpArrow } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
 
  return (
    <div  className="px-5 max-w-[1280px] mx-auto">
    <div className="flex items-center justify-between w-full py-4 relative">
      <div className="flex items-center justify-center md:space-x-10 lg:space-x-20 ">
        <div className="font-semibold text-2xl">
          <Link to="/" className=" text-blue-950 text-xl font-bold ">
          HeyGen
          </Link>
        </div>
        <nav  className="max-md:hidden flex flex-row items-center  ">
          <ul className="flex items-center space-x-3  font-semibold text-[15px]">
       
            <li>
              <Link to="/home" className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}>
              Home
              </Link>
            </li>
            <li>
              <Link to="/" className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}>
              Profile
              </Link>
            </li>
            <li>
              <Link to="/signup" className={` hover:bg-[#eef2f6f0] hover:text-blue-500 rounded-full py-2 px-3 inline-block w-full`}>
              Signup
              </Link>
            </li>
          </ul>
          
        </nav>
      </div>
      
      <div className="flex items-center space-x-4">
        {/* <SearchBar /> */}
        <p className=" flex text-right items-end font-semibold cursor-pointer hover:text-[#5636f3] duration-300 max-md:hidden "> Contact Sales</p>
        <div
          onClick={() => setShowProfile(!showProfile)}
          className="relative cursor-pointer"
        >   
        </div>

        <Link to="/">
          <div className=" text-xl py-3 bg-[#5636f3] hover:bg-[#7559ff] text-white rounded-md">
           <button className=" px-4 ">Get started</button>
          </div>
        </Link>


        <span
          onClick={() => setShowNav(!showNav)}
          className="p-[9px] bg-gray-100 rounded-md md:hidden"
        >
         {
          showNav ?  <AiOutlineClose size={30}
          className="transition ease-in duration-150"
        />: <CiMenuBurger size={30}
        className="transition ease-in duration-150"
      />
         }
        </span>
      </div>
    </div>
    <div
      className={`md:hidden ${
        showNav
          ? "pb-4  rounded-lg "
          : "h-0 invisible opacity-0"
      }`}
    >
      <ul className="flex flex-col text-[15px] opacity-100 ">
      <li onClick={() => setIsHovered(!isHovered)} className=" pt-3 " >
            <Link to="/" className={`${isHovered && " text-blue-500  rounded-full"} py-2 inline-block w-full`}>
                <span className={` flex flex-row gap-1 font-semibold `}>
                Use Cases
                    <IoIosArrowDown className={`transition-transform transform mt-1 text-blue-500 ${isHovered ? ' duration-300 rotate-180' : ' duration-300 rotate-0'}`} size={20} />
                </span> 
            </Link>
            {/* Nested Menu */}
            <div onMouseEnter={() => setIsHovered(true)} className={`absolute  flex items-center z-[2] pt-2  ${
                isHovered ? "" : "hidden"
              }`}>
 {isHovered && (
                <ul className=" rounded-3xl shadow-lg py-6 px-6 bg-white text-black flex flex-col gap-2 ">
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Sales Outreach</Link></li>
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Product Marketing</Link></li>
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Content Marketing</Link></li>
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Learning & Development</Link></li>
            </ul>
            )}
            </div>
           
        </li>
        <li onClick={() => setIsHovered2(!isHovered2)} className=" " >
            <Link to="/" className={`${isHovered2 && " text-blue-500  rounded-full"} py-2 inline-block w-full`}>
                <span className={` flex flex-row gap-1 font-semibold `}>
                Features
                    <IoIosArrowDown className={`transition-transform transform mt-1 text-blue-500 ${isHovered2 ? ' duration-300 rotate-180' : ' duration-300 rotate-0'}`} size={20} />
                </span> 
            </Link>
            {/* Nested Menu */}
            <div  className={`absolute  flex items-center z-[2] pt-2  ${
                isHovered2 ? "" : "hidden"
              }`}>
 {isHovered2 && (
                <ul className=" rounded-3xl shadow-lg py-6 px-6 bg-white text-black flex flex-col gap-2 ">
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Sales Outreach</Link></li>
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Product Marketing</Link></li>
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Content Marketing</Link></li>
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Learning & Development</Link></li>
            </ul>
            )}
            </div>
           
        </li>
        <li onClick={() => setIsHovered3(!isHovered3)} className=" " >
            <Link to="/" className={`${isHovered3 && " text-blue-500  rounded-full"} py-2 inline-block w-full`}>
                <span className={` flex flex-row gap-1 font-semibold `}>
                Resources
                    <IoIosArrowDown className={`transition-transform transform mt-1 text-blue-500 ${isHovered3 ? ' duration-300 rotate-180' : ' duration-300 rotate-0'}`} size={20} />
                </span> 
            </Link>
            {/* Nested Menu */}
            <div  className={`absolute  flex items-center z-[2] pt-2  ${
                isHovered3 ? "" : "hidden"
              }`}>
 {isHovered3 && (
                <ul className=" rounded-3xl shadow-lg py-6 px-6 bg-white text-black flex flex-col gap-2 ">
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Sales Outreach</Link></li>
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Product Marketing</Link></li>
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Content Marketing</Link></li>
                <li className=" hover:text-blue-500 duration-150 "><Link to="/">Learning & Development</Link></li>
            </ul>
            )}
            </div>
           
        </li>
        <li onClick={() => setIsHovered4(!isHovered4)} className="" >
            <Link to="/" className={`${isHovered4 && " text-blue-500  rounded-full"} py-1 inline-block w-full`}>
                <span className={` flex flex-row gap-1 font-semibold `}>pricing</span> 
            </Link>
           
        </li>
      </ul>
      
    </div>
  </div>
  )
}

export default Navbar