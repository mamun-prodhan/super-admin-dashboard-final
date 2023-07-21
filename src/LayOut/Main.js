import React from 'react';
import menuHome from "../asset/home-menu.svg";
import Enginer from "../asset/engineer.png";
import { SearchIcon } from "@heroicons/react/outline";
import { Link, Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div className="lg:flex lg:py-16 bg-[#F3F7F2]">
      {/* menu div */}
      <div className="w-[100%] lg:w-[20%] flex lg:block items-center justify-around py-3 ">
        <Link to={"/dashbord"}>
        <div className="flex flex-col items-center">
          <img
            className="w-[56px] h-[49px] hover:bg-[#3F8825] rounded-xl p-3  hover:bg-opacity-[31%]"
            src={menuHome}
            alt="dashboard"
          />
          <p className="text-xs font-semibold mt-1">Dashboard</p>
        </div>
        </Link>
        <Link to={"/contractors"}>
        <div className="flex flex-col items-center  lg:my-16">
          <img
            className="w-[56px] h-[49px] hover:bg-[#3F8825] rounded-xl p-3  hover:bg-opacity-[31%]"
            src={Enginer}
            alt="contractors"
          />
          <p className="text-xs font-semibold mt-1">Contractors</p>
        </div>
        </Link>
        <div className="flex flex-col items-center">
          <img
            className="w-[56px] h-[49px] hover:bg-[#3F8825] rounded-xl p-3  hover:bg-opacity-[31%]"
            src={menuHome}
            alt="users"
          />
          <p className="text-xs font-semibold mt-1">Users</p>
        </div>
      </div>
      <div className="w-[100%] lg:w-[80%] h-[600px] mt-5">
        {/* search bar */}
        <div className="">
          <form
            action=""
            className="w-full px-5 md:px-0 lg:px-0 m-0 md:mx-auto lg:m-0 md:max-w-[80%] lg:max-w-[60%]"
          >
            <div className="relative flex items-center">
              <SearchIcon className="w-5 h-6 text-[#081D03] absolute ml-3 pointer-events-none"></SearchIcon>
              <input
                type="text"
                name="search"
                placeholder="Search"
                autoComplete="off"
                className="pr-3 pl-10 py-4 w-full font-semibold text-[#626262] text-xs rounded-xl border-none focus:outline-[#3F8825] focus:ring-2"
              />
            </div>
          </form>
          {/* <button className="flex items-center p-4 bg-[#FFF] hover:bg-[#3F8825] rounded-full">
            <img className="me-4" src={findTrade} alt="logo" />
            <img src={settings} alt="settings" />
          </button> */}
        </div>
        {/* graph container  */}
        <Outlet></Outlet>

      </div>

    </div>
    );
};

export default Main;