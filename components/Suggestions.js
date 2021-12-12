import { useState, useEffect } from "react";

function Suggestions() {
  const [suggestions, SetSuggestions] = useState("");

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      id: i,
      img: "https://i.pravatar.cc/300" + i,
      username: "Admin" + i,
      company: "Company" + i,
    }));
    SetSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-bold">See All</button>
      </div>

      <div className="flex items-center justify-between mt-3">
        <img
          className="h-10 w-10 rounded-full border p-[2px]"
          src="https://i.pravatar.cc/300"
          alt=""
        />
        <div className="flex-1 ml-4">
          <h2 className="font-semibold text-sm">Admin</h2>
          <h3 className="text-xs text-gray-400">Works at Caudan</h3>
        </div>
        <button className="text-blue-400 text-sm font-bold">Follow</button>
      </div>
    </div>
  );
}

export default Suggestions;
