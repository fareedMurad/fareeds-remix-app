import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface DBContentLayoutProps {
  children: React.ReactNode;
  pageName: string | React.ReactNode;
  buttonText?: string;
  icon?: React.ReactNode;
  containerClass?: string;
  rightContent?: ReactNode;
  headerClassName?: string;
  className?: string;
  wrapperPageNameClasses?: string;
}

const DBContentLayout = ({
  icon,
  pageName,
  buttonText,
  children,
  containerClass,
  rightContent,
  headerClassName,
  className,
  wrapperPageNameClasses,
}: DBContentLayoutProps) => {
  return (
    <div className={className}>
      <header
        className={twMerge(
          "bg-white shadow lg:ms-[-50px] lg:ps-[50px] flex flex-wrap",
          headerClassName
        )}
      >
        <div className="lg:mx-5 px-3 py-2 lg:py-10 relative after:content-[''] after:inline-block after:absolute after:top-1/2 after:-translate-y-1/2  after:left-8 after:bg-[#D9D9D9] after:-w-1.5 after:rounded-full after:h-3/4">
          <ul className="flex mb-[5px] lg:mb-[13px] text-[#AFAFAF] text-xl font-medium">
            <li className="flex  items-center mr-[12px] lg:text-xl text-base">
              Home
              <svg
                className="ml-[9px]"
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.248963 0.90051C-0.0829875 1.23251 -0.0829875 1.77061 0.248963 2.10261L5.64789 7.50151L0.248963 12.9005C-0.0829875 13.2325 -0.0829875 13.7706 0.248963 14.1026C0.580903 14.4346 1.11909 14.4346 1.45104 14.1026L7.45099 8.10261C7.78299 7.77061 7.78299 7.23251 7.45099 6.90051L1.45104 0.90051C1.11909 0.56861 0.580903 0.56861 0.248963 0.90051Z"
                  fill="#AFAFAF"
                />
              </svg>
            </li>
            <li className="flex items-center mr-3 lg:text-xl text-base">
              {pageName}
            </li>
          </ul>
          <div
            className={twMerge(
              "item-start md:mx-0 text-white flex items-center px-5 text-[15px] lg:text-base font-Wadik py-2.5 lg:py-[17px] uppercase bg-[#092236] rounded-[10px] w-fit border-r-4 b-r-white lg:pr-3",
              wrapperPageNameClasses
            )}
          >
            <div className="lg:border-l-4 b-l-white pl-0 lg:pl-3">{icon}</div>
            <span className="ml-[7px]">{buttonText || pageName}</span>
          </div>
        </div>
        {rightContent}
      </header>
      <div className={containerClass || ""}>{children}</div>
    </div>
  );
};

export default DBContentLayout;
