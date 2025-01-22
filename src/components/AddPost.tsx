import Image from "next/image";
import React from "react";

const AddPost = () => {
  return (
    <div className="bg-white rounded-lg flex gap-4 justify-between text-sm p-2">
      {/* AVATAR */}
      <Image
        src="https://images.pexels.com/photos/26587611/pexels-photo-26587611/free-photo-of-magenta-aurora-over-pine-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt={""}
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <div className="flex gap-4">
          <textarea
            name=""
            id=""
            placeholder="share your life update...🎈"
            className="bg-slate-100 rounded-lg p-2 flex-1"
          ></textarea>
          <Image
            src="/emoji.svg"
            alt="emoji"
            className="w-5 h-5 cursor-pointer self-end"
            width={20}
            height={20}
          />
        </div>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addPhoto.svg" alt="camera" width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.svg" alt="camera" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addEvent.svg" alt="camera" width={20} height={20} />
            Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addPoll.svg" alt="camera" width={20} height={20} />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
