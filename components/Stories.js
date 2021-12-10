function Stories() {
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {[...Array(20)].map((_, i) => (
        <img
          className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
          src={`https://i.pravatar.cc/300` + i}
        />
      ))}
    </div>
  );
}

export default Stories;
