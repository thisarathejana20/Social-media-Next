import AddPost from "@/components/AddPost";
import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <div className="flex gap-6">
      {/* left menu section */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>
      {/* main section */}
      <div className="w-full lg:w-[70%] xl:w-[50%] mt-6">
        <div className="flex flex-col gap-4">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      {/* right menu section */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  );
}
