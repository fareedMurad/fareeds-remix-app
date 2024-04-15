import React from "react";
import { Option } from "@fareeds-remix-app/common/components/Select";
import { cn } from "@fareeds-remix-app/common/utils/utils";

const CommandItem = ({
  option,
  isActive,
}: {
  option: Option;
  isActive: boolean;
}) => {
  return (
    <li
      className={cn("list-none relative h-12 flex items-center pl-4", {
        "before:content-[''] before:h-full before:w-1 before:bg-teal before:absolute before:left-0 bg-cyan50":
          isActive,
      })}
    >
      <div className="flex items-center gap-2">
        <span className="">{option.icon}</span>
        <span>{option.label}</span>
      </div>
    </li>
  );
};
export default CommandItem;
