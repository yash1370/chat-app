import Image from "next/image";
import UserList from "./components/layouts/userList";
import UserDetailsComponent from "./components/layouts/userDetailsComponent";

export default function Home() {
  return (
    <div className="px-4 md:px-auto md:container mx-auto my-16">
      <div className="bg-primary p-7 rounded-xl flex justify-between relative">
        <div>
          <h1 className="text-xl text-dark-blue font-semibold">
            Chat Application
          </h1>
          <p className="text-sm font-normal text-light-gray pt-1.5 flex items-center gap-2">
            Dashboard{" "}
            <span className="bg-gray-100 w-1 h-1 block rounded-full" />
            Chats
          </p>
        </div>
        <div className="hidden md:block absolute right-24 bottom-0">
          <Image
            src="./images/chat-widget.svg"
            width={160}
            height={100}
            alt=" "
          />
        </div>
      </div>
      <div className="mt-9 box-shadow rounded-xl flex">
        <div className="hidden xl:block basis-[30%] 2xl:basis-1/4 border-r border-r-[#EAEFF4]">
          <UserList />
        </div>
        <div className="basis-full xl:basis-[70%] 2xl:basis-3/4">
          <UserDetailsComponent />
        </div>
      </div>
    </div>
  );
}
