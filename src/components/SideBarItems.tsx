import { ReactElement } from "react";

export function SideBarItems({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex gap-5 pl-5 items-center p-5 hover:bg-gray-100 rounded-lg border-gray-400 cursor-pointer rounded-xl transition-all duration-300 ease-in-out focus:outline-none hover:border-blue-500 hover:shadow-md">
      <div className="pl-5">{icon}</div>

      <div className="text-gray-800 pl-2">{text}</div>
    </div>
  );
}
