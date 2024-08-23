import React from "react";
import { PinIcon, LightTrade, StarIcon, SuccessIcon } from "@/components/icons";

interface NewsFeedItemProps {
  id: number;
  date: string;
  time: string;
  title: string;
  selected: boolean;
  trade_name: string;
  trade_ide: boolean;
}
const NewsFeedItem: React.FC<NewsFeedItemProps> = ({
  id,
  date,
  time,
  title,
  selected,
  trade_name,
  trade_ide,
}) => {
  return (
    <>
      <div
      key={id}
        className={`p-[1px]  rounded-[14px] ${
          selected ? "bg-gradient-selected-item-border" : "bg-transparent"
        }`}
      >
        <div
          className={`${
            selected ? "bg-gradient-selected-item" : "bg-gradinet-card-default"
          } rounded-[14px] px-5 pt-6 pb-4  flex flex-col gap-[36px] `}
        >
          <div className="flex flex-row justify-between items-center">
            <p className="font-semibold text-sm  max-w-[444px]">
              {title}
            </p>
            {!selected && (
              <div
                className={`border rounded-full max-w-8 max-h-8 ${
                  trade_ide
                    ? "border-light-yellow shadow-custom-yellow-combined p-1"
                    : "border-white/5 p-2"
                }`}
              >
                {trade_ide ? (
                  <LightTrade width="100%" height="100%" />
                ) : (
                  <PinIcon width="100%" height="100%" />
                )}
              </div>
            )}
          </div>
          <div className="flex justify-between">
            <div className="text-text-light-gray flex flex-row gap-[6px] text-xs font-bold  items-center self-end ">
              <span>{date}</span>
              <span className="w-1 h-1 bg-text-light-gray rounded-full"></span>
              <span>{time}</span>
            </div>
            <div
              className={`p-[1px] ${
                selected ? "bg-gradient-selected-border" : "bg-gradient-green-blue-border"
              }  rounded-[10px]`}
            >
              <div
                className={` min-w-[116px]   py-[10px]  flex justify-center bg-[#0F0F16] items-center rounded-[10px] ${
                  selected ? "shadow-new-selected" : "shadow-new-stock"
                } gap-2`}
              >
                {selected && (
                  <div className=" border border-white/5 rounded-full w-5 h-5 p-1 bg-gradient-selected-item-icon">
                    <StarIcon width="100%" height="100%" />
                  </div>
                )}
                <span className="text-xs font-black text-nowrap">{trade_name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default NewsFeedItem;
