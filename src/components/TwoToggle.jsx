import { useState } from "react";

function TwoToggle({ title1, child1, title2, child2 }) {
  const [isOpenLeft, setIsOpenLeft] = useState(true);

  return (
    <div className="flex bg-slate-500 flex-col p-4 rounded-lg">
      <div className="text-xl flex">
        <button
          className={
            "rounded-t-lg bg-slate-200 flex-grow p-2 border-neutral-100 " +
            (isOpenLeft
              ? "bg-slate-400 border-[1px] border-b-0"
              : "border-[1px] hover:bg-slate-300")
          }
          onClick={() => setIsOpenLeft(true)}
        >
          {title1}
        </button>
        <button
          className={
            "rounded-t-lg bg-slate-200 flex-grow p-2 border-neutral-100 " +
            (!isOpenLeft
              ? "bg-slate-400 border-[1px] border-b-slate-400 "
              : "border-b-[1px] hover:bg-slate-300")
          }
          onClick={() => setIsOpenLeft(false)}
        >
          {title2}
        </button>
      </div>
      <div className="bg-slate-400 rounded-b-lg p-4 text-lg border-neutral-100 border-t-0 border-[1px]">
        <div className="rounded-lg bg-slate-300 p-4 text-slate-800">
          {isOpenLeft ? child1 : child2}
        </div>
      </div>
    </div>
  );
}

export default TwoToggle;
