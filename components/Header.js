import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left - Logo*/}
        <div className="relative hidden md:inline-grid w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 flex-shrink-0 md:hidden cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle - Search Input */}
        <div className="max-w-xs">
          <div className=" relative mt-1 p-3 rounded-md ">
            <div className=" absolute inset-y-0 pl-3 flex items-center pointer-events-none ">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navIcons" />
          <div className="navIcons relative">
            <PaperAirplaneIcon className="navIcons rotate-45" />
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-400 animate-pulse text-white rounded-full flex items-center justify-center">
              3
            </div>
          </div>
          <PlusCircleIcon className="navIcons" />
          <UserGroupIcon className="navIcons" />
          <HeartIcon className="navIcons" />
          <img
            src="https://i.pravatar.cc/300?img=32"
            alt="Profile Pic"
            className="h-10 rounded-full cursor-pointer"
          ></img>
          <MenuIcon className="h-6 md:hidden cursor-pointer flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}

export default Header;
