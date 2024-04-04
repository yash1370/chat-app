"use client";
import React, { useState } from "react";
import { PhoneIcon } from "../themes/icons/phoneIcon";
import { VideoCallIcon } from "../themes/icons/videoCallIcon";
import { MenuIcon } from "../themes/icons/menuIcon";
import AvatarComponent from "../themes/avatarComponent/avatarComponent";
import { ChatHistory, files } from "@/app/constants/constant";
import Image from "next/image";
import { EmojiIcon } from "../themes/icons/emojiIcon";
import { PhotosIcon } from "../themes/icons/photosIcon";
import { AttachmentIcon } from "../themes/icons/attachmentIcon";
import { MicIcon } from "../themes/icons/micIcon";
import { DownArrowIcon } from "../themes/icons/downArrowIcon";
import { ThreeLineIcon } from "../themes/icons/threeLineIcon";
import UserList from "./userList";
import ResponsiveMenu from "./responsiveMenu";

const UserDetailsComponent = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <div className="border-b border-b-[#EAEFF4] p-7 flex items-center justify-between gap-1">
        <div className="flex items-center gap-3">
          <div
            className="cursor-pointer xl:hidden"
            onClick={() => setCollapsed(true)}
          >
            <ThreeLineIcon />
          </div>
          <AvatarComponent src="./images/user-four.svg" alt="Andrew Johnson" />
          <div>
            <h2 className="text-sm text-blue-gray font-semibold">
              Andrew Johnson
            </h2>
            <p className="text-sm font-normal text-light-gray pt-1">Away</p>
          </div>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <PhoneIcon />
          <VideoCallIcon />
          <MenuIcon />
        </div>
      </div>
      <div className="flex gap-7 border-b border-b-[#EAEFF4]">
        <div className="basis-full xl:basis-[67%] 2xl:basis-3/4 py-7 border-r border-r-[#EAEFF4]">
          {ChatHistory.map((chat, index) => {
            return (
              <div key={index} className="pb-10">
                {(chat.senderMsg || chat.senderSrc) && (
                  <div className="px-7">
                    <div className="flex items-center gap-3">
                      <AvatarComponent
                        src="./images/user-four.svg"
                        alt="Andrew Johnson"
                        className="!w-10 !h-10"
                      />
                      <p className="text-xs text-light-gray font-normal">
                        Andrew, 2 hours ago
                      </p>
                    </div>
                    {chat.senderMsg && (
                      <div className="mt-2 ml-[51px] bg-light-primary rounded-[5px] inline-block py-2 px-2.5">
                        <p className="text-sm font-normal text-gray-100">
                          {chat?.senderMsg}
                        </p>
                      </div>
                    )}
                    {chat.senderSrc && (
                      <div className="mt-2 ml-[51px]">
                        <Image
                          src={chat?.senderSrc}
                          width={230}
                          height={150}
                          alt="image"
                          title="image"
                        />
                      </div>
                    )}
                  </div>
                )}
                {chat.receiverMsg && (
                  <div className="pt-5 px-7 text-end">
                    <p className="text-xs text-light-gray font-normal">
                      2 hours ago
                    </p>
                    <div className="mt-2 bg-light-primary rounded-[5px] inline-block py-2 px-2.5">
                      <p className="text-sm font-normal text-gray-100">
                        {chat?.receiverMsg}
                      </p>
                    </div>
                    {chat?.receiverMsgOne && (
                      <div className="mt-2 bg-light-primary rounded-[5px] inline-block py-2 px-2.5">
                        <p className="text-sm font-normal text-gray-100">
                          {chat?.receiverMsgOne}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="hidden xl:block xl:basis-1/3 2xl:basis-1/4 p-7">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-blue-gray">
                Media <span className="text-light-gray">(36)</span>
              </p>
              <div className="w-5 h-5 cursor-pointer flex items-center justify-center">
                <DownArrowIcon />
              </div>
            </div>
            <div className="pt-4">
              <div className="flex items-center flex-wrap gap-2.5">
                <Image
                  src="./images/media-one.svg"
                  width={72}
                  height={64}
                  alt="image"
                  title="image"
                />
                <Image
                  src="./images/media-two.svg"
                  width={72}
                  height={64}
                  alt="image"
                  title="image"
                />
                <Image
                  src="./images/media-three.svg"
                  width={72}
                  height={64}
                  alt="image"
                  title="image"
                />
                <Image
                  src="./images/media-four.svg"
                  width={72}
                  height={64}
                  alt="image"
                  title="image"
                />
                <Image
                  src="./images/media-five.svg"
                  width={72}
                  height={64}
                  alt="image"
                  title="image"
                />
                <div className="bg-[#EAEFF4] rounded-lg w-[72px] h-16 flex items-center justify-center cursor-pointer">
                  <p className="text-sm font-normal text-light-gray">58+</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-7">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-blue-gray">
                Files <span className="text-light-gray">(36)</span>
              </p>
              <div className="w-5 h-5 cursor-pointer flex items-center justify-center">
                <DownArrowIcon />
              </div>
            </div>
            <div className="pt-6">
              {files.map((file, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 pb-5 last:pb-0"
                  >
                    <div className="bg-light-primary w-12 h-12 rounded-lg flex items-center justify-center">
                      <Image
                        src={file?.src}
                        width={24}
                        height={24}
                        alt={file?.alt}
                        title={file?.alt}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-gray">
                        {file?.title}
                      </p>
                      <p className="text-xs font-normal text-light-gray pt-1">
                        2 MB <span className="ml-3">2 Dec 2022</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="p-7 flex items-center justify-between gap-7">
        <div className="flex items-center gap-3 w-11/12">
          <EmojiIcon />
          <input
            type="text"
            className="search-input w-full"
            placeholder="Type a Message"
          />
        </div>
        <div className="flex items-center gap-3.5 cursor-pointer">
          <PhotosIcon />
          <AttachmentIcon />
          <MicIcon />
        </div>
      </div>
      <div className="xl:hidden">
        <ResponsiveMenu {...{ collapsed, setCollapsed }} />
      </div>
    </div>
  );
};

export default UserDetailsComponent;
