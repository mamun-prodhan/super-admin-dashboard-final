import React from "react";
import Contractors from "../Contractors/Contractors";
import MoneyDashBord from "../MoneyDashbord/MoneyDashBord";

const DashBord = () => {
  return (
    <div className="p-5 lg:p-14 mt-10 bg-[#FFF] rounded-2xl">
      <div>
        <div className="lg:flex gap-12 bg-[#FFF]">
          <div className="lg:w-[50%]">
            <Contractors></Contractors>
          </div>
          <div className="lg:w-[50%]">
            <Contractors></Contractors>
          </div>
        </div>
        <div className="lg:flex gap-12 bg-[#FFF]">
          <div className="lg:w-[50%]">
            <Contractors></Contractors>
          </div>
          <div className="lg:w-[50%]">
            <Contractors></Contractors>
          </div>
        </div>
      </div>
      <MoneyDashBord></MoneyDashBord>
    </div>
  );
};

export default DashBord;
