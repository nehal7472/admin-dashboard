import ExpenseBar from "../components/ExpenseBar";
import ExpenseItem from "../components/ExpenseItem";
import { IoCartOutline } from "react-icons/io5";
import { BsTruckFront } from "react-icons/bs";
import { LuHouse } from "react-icons/lu";
import { MdOutlineFastfood, MdOutlineVideoCameraBack } from "react-icons/md";
import ExpenseCard from "../components/ExpenseCard";

const Expenses = () => {
  const ExpenseItems = [
    {
      icon: <IoCartOutline />,
      category: "Grocery",
      time: "5:12 pm",
      note: "Belanja di pasar",
      amount: "-326.800",
      bgColorClass: "bg-blue-500",
    },
    {
      icon: <BsTruckFront />,
      category: "Transportation",
      time: "5:12 pm",
      note: "Naik bus umum",
      amount: "-15.000",
      bgColorClass: "bg-orange-500",
    },
    {
      icon: <LuHouse />,
      category: "Housing",
      time: "5:12 pm",
      note: "Bayar Listrik",
      amount: "-185.750",
      bgColorClass: "bg-green-500",
    },
  ];

  const ExpenseItems2 = [
    {
      icon: <MdOutlineFastfood />,
      category: "Food and Drink",
      time: "5:12 pm",
      note: "Makan Steak",
      amount: "-156.000",
      bgColorClass: "bg-purple-500",
    },
    {
      icon: <MdOutlineVideoCameraBack />,
      category: "Entertainment",
      time: "5:12 pm",
      note: "Nonton Bioskop",
      amount: "-35.200",
      bgColorClass: "bg-red-500",
    },
  ];

  const ExpenseBarData = [
    { label: "Food and Drinks", amount: "872.400" },
    { label: "Shopping", amount: "1.378.200" },
    { label: "Housing", amount: "928.500" },
    { label: "Transportation", amount: "420.700" },
    { label: "Vehicle", amount: "520.000" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-12">
      <div className="flex-1">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Expenses</h1>
          <p className="text-sm text-gray-500">01 - 25 March, 2020</p>
        </div>

        <img src="grap.png" alt="Expenses chart" className="w-full mb-6" />

        <div>
          <h2 className="w-full border-b border-gray-300 text-lg font-semibold pb-2 ">
            Today
          </h2>
          {ExpenseItems.map((item, index) => (
            <ExpenseItem
              key={index}
              icon={item.icon}
              category={item.category}
              time={item.time}
              note={item.note}
              amount={item.amount}
              bgColorClass={item.bgColorClass}
            />
          ))}
        </div>

        <div className="mt-6">
          <h2 className="w-full border-b border-gray-300 text-lg font-semibold  pb-2">
            Monday, 23 March 2020
          </h2>
          {ExpenseItems2.map((item, index) => (
            <ExpenseItem
              key={index}
              icon={item.icon}
              category={item.category}
              time={item.time}
              note={item.note}
              amount={item.amount}
              bgColorClass={item.bgColorClass}
            />
          ))}
        </div>
      </div>

      <div className="w-full md:w-2/6 bg-gray-100 dark:bg-[#F9FAFC] p-8 rounded-lg flex flex-col justify-between ">
        <div className="pb-12">
          <h2 className="text-lg font-semibold mb-4">Where your money go?</h2>

          {ExpenseBarData.map((item, index) => (
            <ExpenseBar key={index} label={item.label} amount={item.amount} />
          ))}
        </div>

        <ExpenseCard />
      </div>
    </div>
  );
};

export default Expenses;
