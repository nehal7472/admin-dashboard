function ExpenseCard() {
  return (
    <div className="max-w-xs p-6 bg-[#EDF0F6] rounded-xl text-center space-y-4">
      <div className="flex justify-center space-x-4">
        <img src="box.png" alt="Boxes" className="w-12 h-12" />
        <img src="tree.png" alt="Plant" className="w-12 h-12" />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Save more money</h2>
        <p className="text-sm text-gray-500">
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
      </div>
      <button className="bg-black text-white text-xs tracking-widest px-6 py-2 rounded-md hover:bg-gray-800 transition">
        VIEW TIPS
      </button>
    </div>
  );
}

export default ExpenseCard;
