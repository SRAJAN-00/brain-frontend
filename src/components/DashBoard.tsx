import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { ContentModel } from "../components/ContentModel";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { SideBar } from "../components/SideBar";
import { useContent } from "./hooks/useContent";

export function DashBoard() {
  const [modelopen, setModelOpen] = useState(false);
  const { contents, refresh, deleteContent } = useContent();
  console.log("contents", contents);
  useEffect(() => {
    refresh();
  }, [modelopen]);

  return (
    <div>
      <SideBar />
      <div className="ml-72 min-h-screen  bg-gray-50 top-0 ">
        <ContentModel
          open={modelopen}
          onClose={() => {
            setModelOpen(false);
          }}
        />
        <div className=" flex justify-end  gap-5 pt-10 mr-9 5 bg-gray-50">
          <Button
            onClick={() => setModelOpen(true)}
            variant="primary"
            text="Add Content"
            startIcon={<PlusIcon />}
          ></Button>
          <Button
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          ></Button>
        </div>
        <div className="flex flex-wrap ml-5 gap-10">
          {contents.map(({ _id, type, link, title }, index) => (
            <Card
              key={link || index}
              title={title}
              link={link}
              type={type}
              onDelete={() => deleteContent(_id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
