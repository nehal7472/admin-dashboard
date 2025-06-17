function ExpenseCard() {
  return (
    <div className="relative max-w-xs bg-[#EDF0F6] rounded-xl text-center pt-12 pb-6 px-6">
      <img
        src="box.png"
        alt="Boxes"
        className="absolute -top-6 left-8 w-20 h-18"
      />
      <img
        src="tree.png"
        alt="Plant"
        className="absolute -top-6 right-8 w-12 h-18"
      />
      <div className="space-y-4 pt-4">
        <h2 className="text-lg font-semibold text-gray-900">Save more money</h2>
        <p className="text-sm text-gray-500">
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
        <button className="bg-black text-white text-xs tracking-widest px-12 py-4 rounded-md hover:bg-gray-800 transition">
          VIEW TIPS
        </button>
      </div>
    </div>
  );
}

export default ExpenseCard;
