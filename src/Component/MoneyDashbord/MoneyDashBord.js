import React from 'react';
import money from "../../asset/money.png";
import arrow1 from "../../asset/arrow1.png";
// import arrow2 from "../../asset/arrow2.png";
import arrow3 from "../../asset/arrow3.png";
import cross from "../../asset/delete.png";
import error from "../../asset/error.png";
import export1 from "../../asset/export.png";
import goal from "../../asset/goal.png";
// import home from "../../asset/home.png";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const MoneyDashBord = () => {
    const data = [
        {
          name: "Feb 1",
          uv: 140,
          pv: 2400,
          amt: 2400,
        },
        {
          name: "Feb 2",
          uv: 100,
          pv: 1398,
          amt: 2210,
        },
        {
          name: "Feb 3",
          uv: 80,
          pv: 9800,
          amt: 2290,
        },
        {
          name: "Feb 4",
          uv: 60,
          pv: 3908,
          amt: 2000,
        },
        {
          name: "Feb 5",
          uv: 40,
          pv: 4800,
          amt: 2181,
        },
        {
          name: "Feb 6",
          uv: 0,
          pv: 3800,
          amt: 2500,
        },
        {
          name: "Feb 7",
          uv: 0,
          pv: 4300,
          amt: 2100,
        },
      ];
    return (
        <div className="">
      <div className=" border-2 mt-12 lg:flex gap-10 border-[#F3F7F2] rounded-xl p-5 lg:w-[100%]">
        <div className="w-[100%] md:w-[100%] lg:w-[30%] mb-10 md:mb-10 lg:mb-0">
          <p className="text-xs font-bold">Processing</p>
          <h3 className="text-xl font-bold">$0.00 USD</h3>
          {/* money details */}
          <div className="border border-[#EAEAEA] rounded-lg p-3 my-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="p-1 bg-[#EAEAEA] rounded-full"
                  src={money}
                  alt=""
                />
                <p className="mx-2 text-xs">See details about money thats on the way</p>
              </div>
              <img
                className="p-1 bg-[#EAEAEA] rounded-full"
                src={cross}
                alt=""
              />
            </div>
            <hr className="my-2" />
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="p-1 bg-[#EAEAEA] rounded-full"
                  src={money}
                  alt=""
                />
                <p className="mx-2 text-xs font-bold">Demo</p>
              </div>
              <p className="text-xs font-bold">$0.00</p>
            </div>
            <hr className="my-2" />
            <div className="flex items-center justify-between ">
              <div className="flex items-center">
                <p className="mx-1 text-xs font-bold">Pending</p>
                <img
                  className=" bg-[#EAEAEA] rounded-full w-[10px] h-[10px]"
                  src={error}
                  alt=""
                />
              </div>
              <p className="text-xs font-bold">$0.00</p>
            </div>
            <div className="flex items-center justify-between my-3">
              <p className="text-xs mx-1 font-bold">On the way</p>
              <p className="text-xs font-bold">$0.00</p>
            </div>
            <div className="flex items-center justify-between  text-[#787777]">
              <div className="flex items-center">
                <p className="mx-1 text-xs font-bold">Ready for payout</p>
                <img
                  className=" bg-[#EAEAEA] rounded-full w-[10px] h-[10px]"
                  src={error}
                  alt=""
                />
              </div>
              <p className="text-xs font-bold">$0.00</p>
            </div>
            <div className="flex items-center justify-between my-3 text-[#787777]">
              <div className="flex items-center">
                <p className="mx-1 text-xs font-bold">Sent to payout account</p>
                <img
                  className=" bg-[#EAEAEA] rounded-full w-[10px] h-[10px]"
                  src={error}
                  alt=""
                />
              </div>
              <p className="text-xs font-bold">$0.00</p>
            </div>
            <hr className="mb-3" />
            <div className="flex items-center justify-between">
              <p className="mx-1 text-xs font-bold text-[#928CF9]">See details</p>
              <img src={arrow3} alt="" />
            </div>
          </div>
          <h3 className="text-xl font-bold">Goal</h3>
          <div className="border border-[#EAEAEA] rounded-lg p-3 my-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="p-1 bg-[#EAEAEA] rounded-full"
                  src={goal}
                  alt=""
                />
                <p className="mx-2 text-xs font-bold text-[#787777]">
                  Set an earnings goal
                </p>
              </div>
              <p className="text-xs font-bold text-[#928CF9]">Create goal</p>
            </div>
            <hr className="my-3" />
            <div>
              <p className="mx-1 text-xs font-bold text-[#787777]">
                Earn my first $10
              </p>
            </div>
          </div>
        </div>
        {/* graph */}
        <div className="w-[100%] md:w-[100%] lg:w-[70%]">
            <div className="flex mb-5 items-center justify-between">
                <div>
                    <p className="text-xs font-bold">Total earnings</p>
                    <h3 className="text-xl font-bold">$329.03 USD</h3>
                </div>
                <div className="flex items-center bg-[#EAEAEA] rounded-xl p-1 mr-4">
                  <p className="me-2 text-xs font-bold">Past Year</p>
                  <img src={arrow1} alt="export" />
                </div>
            </div>
          {/* graph div */}
          <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis
                dataKey="uv"
                axisLine={false}
                tickLine={false}
                tickCount={8}
              />
              <Tooltip />
            </LineChart>
            </ResponsiveContainer>
          </div>
          {/* transaction div */}
          <div className="mt-10">
            <div className="md:flex lg:flex items-center justify-between">
              <div>
                <h3 className="text-xl text-center md:text-start lg:text-start  font-bold">
                  Transactions
                </h3>
              </div>
              <div className="md:flex lg:flex items-center">
                <div className="flex items-center justify-center my-3 md:my-0 lg:my-0 mr-3 p-2 rounded-3xl bg-[#EAEAEA]">
                  <img src={export1} alt="export" />
                  <p className="ms-1 text-xs font-bold">Export</p>
                </div>
                <div className="flex items-center justify-center mb-3 md:mb-0 lg:mb-0 mr-3 p-2 rounded-3xl bg-[#EAEAEA]">
                  <p className="me-1 text-xs font-bold">All activity</p>
                  <img src={arrow1} alt="export" />
                </div>
                <div className="flex items-center justify-center mb-3 md:mb-0 lg:mb-0 p-2 rounded-3xl bg-[#EAEAEA]">
                  <p className="me-1 text-xs font-bold">All time</p>
                  <img src={arrow1} alt="export" />
                </div>
              </div>
            </div>
            <div className="my-5">
              <table className="w-[100%] text-xs font-bold text-[#787777]">
                <tr className="text-left">
                  <th>TYPE</th>
                  <th>DATE</th>
                  <th>AMOUNT</th>
                </tr>
                <tr className="border-b ">
                  <td className="flex items-center py-4">
                    <img
                      className="me-2 p-1 bg-[#EAEAEA] rounded-full"
                      src={money}
                      alt=""
                    />
                    <span cla>Payout from Demo to STRIPE TEST BANK 6789</span>
                  </td>
                  <td className="py-4">Apr 11</td>
                  <td className="py-4">
                    <span>$18.22</span>
                    <span className="ms-1 md:ms-2 lg:ms-2 rounded-md p-1 text-xs bg-[#D3F3CD]">
                      Settled
                    </span>
                  </td>
                </tr>
                <tr className="border-b ">
                  <td className="flex items-center py-4">
                    <img
                      className="me-2 p-1 bg-[#EAEAEA] rounded-full"
                      src={money}
                      alt=""
                    />
                    <span>Guitter Lesson</span>
                  </td>
                  <td className="py-4">Apr 11</td>
                  <td className="py-4">
                    <span>$38.22</span>
                    <span className="ms-1 md:ms-2 lg:ms-2 rounded-md p-1 text-xs bg-[#D3F3CD]">
                      Settled
                    </span>
                  </td>
                </tr>
                <tr className="border-b ">
                  <td className="flex items-center py-4">
                    <img
                      className="me-2 p-1 bg-[#EAEAEA] rounded-full"
                      src={money}
                      alt=""
                    />
                    <span>Payout from Demo to STRIPE TEST BANK 6789</span>
                  </td>
                  <td className="py-4">Apr 11</td>
                  <td className="py-4">
                    <span>$20.22</span>
                    <span className="ms-1 md:ms-2 lg:ms-2 rounded-md p-1 text-xs bg-[#D3F3CD]">
                      Settled
                    </span>
                  </td>
                </tr>
                <tr className="border-b ">
                  <td className="flex items-center py-4">
                    <img
                      className="me-2 p-1 bg-[#EAEAEA] rounded-full"
                      src={money}
                      alt=""
                    />
                    <span>Guitter Lesson</span>
                  </td>
                  <td className="py-4">Apr 11</td>
                  <td className="py-4">
                    <span>$10.22</span>
                    <span className="ms-1 md:ms-2 lg:ms-2 rounded-md p-1 text-xs bg-[#D3F3CD]">
                      Settled
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default MoneyDashBord;