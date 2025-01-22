import Image from "next/image";
import React from "react";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-sm">
      <div className="flex gap-8">
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <Image
            src={""}
            alt={""}
            width={80}
            height={80}
            className="rounded-full ring-blue-400"
          />
          <span className="font-medium">Ricky</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
