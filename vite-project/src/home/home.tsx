import { Display1 } from "./display1/display";
import { Display2 } from "./display2/display2";
import { Display3 } from "./display3/display3";
import { Display4 } from "./display4/display4";
import { Display5 } from "./display5/display5";
import { Display6 } from "./display6/display6";
import { Display7 } from "./display7/display7";
import { Display8 } from "./display8/display8";
import { Display9 } from "./display9/display9";
import { Display10 } from "./display10/display10";
import { Display11 } from "./display11/display11";
import { Display12 } from "./display12/display12";
import { Display13 } from "./display13/display13";
import { useEffect, useRef } from "react";

export const Home = ({ selectname }: any) => {
  console.log(selectname, "se");

  const refs: any = {
    "About Us": useRef<HTMLDivElement>(null),
    Shop: useRef<HTMLDivElement>(null),
    Blog: useRef<HTMLDivElement>(null),
    Pages: useRef<HTMLDivElement>(null),
    Contact: useRef<HTMLDivElement>(null),
    // add other names matching your menuItems
  };

  useEffect(() => {
    if (selectname && refs[selectname]?.current) {
      refs[selectname].current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectname]);

  return (
    <div className="w-full flex flex-wrap flex-col md:flex-row bg-white opacity-100 justify-center items-center gap-4 p-2">
      <Display1 />

      <div ref={refs["Shop"]} className="w-full">
        <Display2 />
      </div>
      <div ref={refs["Blog"]} className="w-full">
        <Display3 />
      </div>
      <Display4 />
      <Display5 />
      <Display6 />
      <div ref={refs["About Us"]} className="w-full">
        <Display7 />
      </div>
      <Display8 />
      <Display9 />
      <Display10 />
      <div ref={refs["Pages"]} className="w-full">
        <Display11 />
      </div>
      <Display12 />
      <div ref={refs["Contact"]} className="w-full">
        
        <Display13 />
      </div>
    </div>
  );
};
