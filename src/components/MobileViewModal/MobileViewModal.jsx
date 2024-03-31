import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { NewsInfoContext } from "../../context/newsInfoContext";

const MobileViewModal = () => {
  const { handleMobileView, formDetails } = useContext(NewsInfoContext);
  const { title, content, category, media } = formDetails;

  return (
    <main className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="bg-white w-[281px] h-[500px] relative rounded-lg overflow-hidden">
        <div className="relative h-[40%]">
          <img src={media} alt="news_image" className="w-full h-full" />
          <span className="text-xs absolute bottom-2 left-2 bg-blue-500/70 text-white rounded-md p-1 capitalize">
            {category}
          </span>
          <span className="text-[10px] font-bold absolute bottom-2 right-2 bg-blue-500 text-white rounded-md p-1">
            News2Day
          </span>
        </div>
        <h2 className="font-bold p-2 capitalize">{title}</h2>
        <p className="px-2">{content}</p>
        <AiOutlineClose
          onClick={handleMobileView}
          className="text-black cursor-pointer absolute top-1 right-1 bg-gray-400/50"
        />
      </div>
    </main>
  );
};

export default MobileViewModal;
