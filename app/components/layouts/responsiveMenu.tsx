import React from "react";
import UserList from "./userList";
import { RoundCrossIcon } from "../themes/icons/roundCrossIcon";

const ResponsiveMenu = ({ collapsed, setCollapsed }: any) => {
  return (
    <div
      className={`relative z-20 ease-in-out duration-500 ${
        !collapsed && "invisible"
      }`}
    >
      <div className="fixed inset-0 bg-black/50"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="fixed inset-y-0 left-0 flex">
          <div className={`w-screen max-w-[21rem] `}>
            <div className="bg-white h-full overflow-auto box-shadow">
              <div
                onClick={() => setCollapsed(false)}
                className="p-2 border border-white/50 rounded-full cursor-pointer flex justify-end"
              >
                <RoundCrossIcon />
              </div>
              <UserList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
