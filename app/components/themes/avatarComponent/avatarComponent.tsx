import Image from "next/image";
import React from "react";

const AvatarComponent = ({
  src,
  alt,
  bgColor,
  title,
  name,
  titleColor,
  color,
  className,
}: any) => {
  return (
    <div className="relative">
      {src ? (
        <Image
          src={src}
          width={56}
          height={56}
          alt={alt}
          title={alt}
          className={`w-14 h-14 ${className}`}
        />
      ) : (
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{ background: bgColor }}
          title={title}
        >
          <p style={{ color: titleColor }} className="text-sm font-semibold">
            {name}
          </p>
        </div>
      )}
      <div
        className="absolute bottom-1 right-0 w-2.5 h-2.5 block rounded-full"
        style={{ background: color }}
      ></div>
    </div>
  );
};

export default AvatarComponent;
