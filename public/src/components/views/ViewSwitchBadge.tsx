import React from "react";
import { BsFillMapFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";

function ViewSwitchBadge() {
  return (
    <div className="fixed flex justify-center items-center bottom-28 left-0 right-0 cursor-pointer">
      <div className=" bg-black px-4 py-4 text-white  rounded-full ">
        {/* <span className="flex items-center gap-2 text-sm">
          Show Map <BsFillMapFill />
        </span> */}
        <span className="flex items-center gap-2 text-sm">
          Show List <AiOutlineUnorderedList />
        </span>
      </div>
    </div>
  );
}

export default ViewSwitchBadge;
