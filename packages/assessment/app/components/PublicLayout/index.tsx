import { useLocation } from "@remix-run/react";
import { twMerge } from "tailwind-merge";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  const isLargeContent = ["/public-challenge"].includes(location.pathname);

  return (
    <div className="lg:h-[1500px] flex flex-col">
      <main
        className={twMerge(
          "w-full grow",
          isLargeContent ? "bg-footerGradient" : ""
        )}
      >
        <div className="container mx-auto py-4">{children}</div>
      </main>
    </div>
  );
}
