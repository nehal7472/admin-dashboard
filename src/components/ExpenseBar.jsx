import React from "react";

function ExpenseBar({ label, amount }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-2">
        <span>{label}</span>
        <span>{amount}</span>
      </div>
      <div className="w-full h-1 bg-gray-300 rounded">
        <div className="h-1 bg-green-500 rounded w-2/3"></div>
      </div>
    </div>
  );
}

export default ExpenseBar;
