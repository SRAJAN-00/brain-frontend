import { BrainIcon } from "../icons/BrainIcon";
import { TwitterIcon } from "../icons/twitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SideBarItems } from "./SideBarItems";

export function SideBar() {
  return (
    <div className="h-screen w-72 bg-white shadow-md border-r-2 border-gray-200 fixed">
      <div className="text-3xl  b pl-4 pt-4 pb-5 flex items-center">
        <div className="pr-3 text-purple-500">
          <BrainIcon />
        </div>
        Second Brain
      </div>
      <div>
        <SideBarItems text="Twitter" icon={<TwitterIcon />} />
        <SideBarItems text="Youtube" icon={<YoutubeIcon />} />
      </div>
    </div>
  );
}
