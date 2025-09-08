import React from "react";
import logo from "../../assets/Common/Navbarlogo.png";

function Loader() {
  return (
    <>
      <div class="flex-col gap-4 w-full flex items-center justify-center">
        <div class="w-28 h-28 border-8 text-indigo-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-indigo-600 rounded-full">
          <div className="p-5">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Loader;
