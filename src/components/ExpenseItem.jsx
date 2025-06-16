function ExpenseItem({ icon, category, time, note, amount, bgColorClass }) {
  return (
    <div className="flex items-start justify-between py-2">
      <div className="flex items-center gap-3">
        <div
          className={`text-md bg-blue-500 text-white rounded-full p-2 ${bgColorClass}`}
        >
          {icon}
        </div>
        <div>
          <p className="font-semibold">{category}</p>
          <p className="text-xs text-gray-500">
            {time} &bull; {note}
          </p>
        </div>
      </div>
      <div className="text-right font-semibold">{amount}</div>
    </div>
  );
}

export default ExpenseItem;
