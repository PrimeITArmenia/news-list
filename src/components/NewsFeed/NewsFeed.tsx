import React from "react";
import {
  FilterIcon,
  InformationIcon,
  PinIcon,
  LightTrade,
  StarIcon,
  SuccessIcon,
} from "@/components/icons";
import data from "./data.json";
import { NewsFeedItem } from "@/components";

interface Data {
  id: number;
  date: string;
  time: string;
  title: string;
  selected: boolean;
  trade_name: string;
  trade_ide: boolean;
}

const feedItems: Data[] = data; 

export default function NewsFeed() {
  return (
    <section className="ml-auto flex flex-col px-4 pb-4 max-w-news-width w-fill bg-gradinet-news-card rounded-[34px]  shadow-new-feed">
      <div className="flex justify-between items-center mx-4 py-6">
        <div className="flex items-center gap-[10px]">
          <h3 className="text-lg font-black">News Feed</h3>
          <div className="max-w-[14px] max-h-[14px]">
            <InformationIcon width="100%" height="100%" />
          </div>
        </div>
        <div className="flex gap-[10px]">
          <div className="flex items-center border border-white/25 px-3 py-2 rounded-xl gap-2">
           
            <span className="text-xs font-semibold">Top Stories</span>
          </div>
          <div className="flex items-center border border-white/25 px-3 py-2 rounded-xl gap-2">
            <div className="max-w-5 max-h-5">
              <FilterIcon width="100%" height="100%" />
            </div>
            <span className="text-xs font-semibold">Filters</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 h-[510px] overflow-y-scroll pl-4 pr-2 custom-scr">
        {feedItems.map((item) => (
          <NewsFeedItem
            key={item.id}
            id={item.id}
            date={item.date}
            time={item.time}
            title={item.title}
            selected={item.selected}
            trade_name={item.trade_name}
            trade_ide={item.trade_ide}
          />
        ))}
      </div>
    </section>
  );
}
