import Image from "next/image";
import React from "react";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="user-img"
            width={10}
            height={10}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Jack Daniel</span>
        </div>
        <Image src="/more.svg" alt="more-img" width={16} height={16} />
      </div>
      {/* DESCRIPTION */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/30453693/pexels-photo-30453693/free-photo-of-traditional-japanese-paper-lanterns-displayed-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="post-img"
            fill={true}
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          necessitatibus totam aliquid voluptatibus magnam recusandae sunt!
          Repellat error laboriosam corrupti laborum doloremque, dolorem rem
          labore aut alias nam quos voluptas.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/like.svg"
              alt="like-icon"
              className="cursor-pointer"
              width={20}
              height={20}
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/comment.svg"
              alt="comment-icon"
              className="cursor-pointer"
              width={20}
              height={20}
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/share.svg"
              alt="share-icon"
              className="cursor-pointer"
              width={20}
              height={20}
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
