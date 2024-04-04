import React from "react";
import AvatarComponent from "../themes/avatarComponent/avatarComponent";
import { DownArrowIcon } from "../themes/icons/downArrowIcon";
import { MenuIcon } from "../themes/icons/menuIcon";
import { SearchIcon } from "../themes/icons/searchIcon";

const UserList = () => {
  return (
    <div className="">
      <div className="p-7 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <AvatarComponent
            src="./images/user-one.svg"
            alt="Mathew Anderson"
            color="#13DEB9"
          />
          <div>
            <h2 className="text-sm text-blue-gray font-semibold">
              Mathew Anderson
            </h2>
            <p className="text-xs font-normal text-light-gray">
              Marketing Director
            </p>
          </div>
        </div>
        <MenuIcon className="cursor-pointer" />
      </div>
      <div className="flex items-center gap-3 px-3 py-2 mx-7 mb-7 border border-[#EAEFF4] rounded-lg">
        <SearchIcon />
        <input
          type="text"
          className="search-input"
          placeholder="Search contacts"
        />
      </div>
      <div className="flex items-center gap-2 p-7 pb-0">
        <p className="text-sm font-semibold text-light-gray">Recent Chats</p>
        <DownArrowIcon />
      </div>
      <div className="mt-5">
        <div className="p-4 flex items-start justify-between hover:bg-primary cursor-pointer">
          <div className="flex items-center gap-3">
            <AvatarComponent
              src="./images/user-two.svg"
              alt="Michell Flintoff"
              color="#13DEB9"
            />
            <div>
              <h2 className="text-sm text-blue-gray font-semibold">
                Michell Flintoff
              </h2>
              <p className="text-xs font-normal text-light-gray">
                You: Yesterdy was great...
              </p>
            </div>
          </div>
          <p className="text-xs font-normal text-light-gray pt-2.5">
            15 minutes
          </p>
        </div>
        <div className="p-4 flex items-start justify-between hover:bg-primary cursor-pointer">
          <div className="flex items-center gap-3">
            <AvatarComponent
              src="./images/user-three.svg"
              alt="Bianca Anderson"
              color="#FA896B"
            />
            <div>
              <h2 className="text-sm text-blue-gray font-semibold">
                Bianca Anderson
              </h2>
              <p className="text-xs font-semibold text-light-gray">
                Nice looking dress you...
              </p>
            </div>
          </div>
          <p className="text-xs font-normal text-light-gray pt-2.5">
            30 minutes
          </p>
        </div>
        <div className="p-4 flex items-start justify-between hover:bg-primary cursor-pointer">
          <div className="flex items-center gap-3">
            <AvatarComponent
              src="./images/user-four.svg"
              alt="Andrew Johnson"
              color="#FFAE1F"
            />
            <div>
              <h2 className="text-sm text-blue-gray font-semibold">
                Andrew Johnson
              </h2>
              <p className="text-xs font-normal text-light-gray">
                Sent a photo
              </p>
            </div>
          </div>
          <p className="text-xs font-normal text-light-gray pt-2.5">2 hours</p>
        </div>
        <div className="p-4 flex items-start justify-between hover:bg-primary cursor-pointer">
          <div className="flex items-center gap-3">
            <AvatarComponent
              src="./images/user-five.svg"
              alt="Mark Strokes"
              color="#13DEB9"
            />
            <div>
              <h2 className="text-sm text-blue-gray font-semibold">
                Mark Strokes
              </h2>
              <p className="text-xs font-normal text-light-gray">
                Lorem ispusm text sud...
              </p>
            </div>
          </div>
          <p className="text-xs font-normal text-light-gray pt-2.5">5 days</p>
        </div>
        <div className="p-4 flex items-start justify-between hover:bg-primary cursor-pointer">
          <div className="flex items-center gap-3">
            <AvatarComponent
              name="MS"
              title="Mark, Stoinus & Rishvi.."
              titleColor="#FA896B"
              bgColor="#FBF2EF"
              color="#13DEB9"
            />
            <div>
              <h2 className="text-sm text-blue-gray font-semibold">
                Mark, Stoinus & Rishvi..
              </h2>
              <p className="text-xs font-semibold text-light-gray">
                Lorem ispusm text ...
              </p>
            </div>
          </div>
          <p className="text-xs font-normal text-light-gray pt-2.5">5 days</p>
        </div>
        <div className="p-4 flex items-start justify-between hover:bg-primary cursor-pointer">
          <div className="flex items-center gap-3">
            <AvatarComponent
              src="./images/user-three.svg"
              alt="Bianca Anderson"
              color="#FA896B"
            />
            <div>
              <h2 className="text-sm text-blue-gray font-semibold">
                Bianca Anderson
              </h2>
              <p className="text-xs font-semibold text-light-gray">
                Nice looking dress you...
              </p>
            </div>
          </div>
          <p className="text-xs font-normal text-light-gray pt-2.5">
            30 minutes
          </p>
        </div>
        <div className="p-4 flex items-start justify-between hover:bg-primary cursor-pointer">
          <div className="flex items-center gap-3">
            <AvatarComponent
              src="./images/user-four.svg"
              alt="Andrew Johnson"
              color="#FFAE1F"
            />
            <div>
              <h2 className="text-sm text-blue-gray font-semibold">
                Andrew Johnson
              </h2>
              <p className="text-xs font-normal text-light-gray">
                Sent a photo
              </p>
            </div>
          </div>
          <p className="text-xs font-normal text-light-gray pt-2.5">2 hours</p>
        </div>
      </div>
    </div>
  );
};

export default UserList;
