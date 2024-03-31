import React, { useContext } from "react";
import { NewsInfoContext } from "../context/newsInfoContext";
import { convertToSimpleDate, getStringFromArray } from "../utils/utils";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useToast } from "@chakra-ui/react";
import { MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageNewsFeed = () => {
  const { newsDataArray, handleDeleteNews } = useContext(NewsInfoContext);
  // console.log(newsDataArray);
  const toast = useToast();

  // function to delete a news feed from the main array
  const handleDeleteButton = (newsData) => {
    handleDeleteNews(newsData.article_id);
    toast({
      title: "Deleted the feed successfully",
      description: `${newsData.category[0]} news feed removed`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const cellStyle = "border border-black p-2 max-[400px]:p-1";

  return (
    <main className="p-6">
      <h2 className="text-xl font-medium mb-6">Manage your news feed</h2>
      <table className="border-collapse border table-fixed">
        <thead className="max-sm:text-sm">
          <tr>
            <th className={cellStyle}></th>
            <th className={cellStyle}>Title</th>
            <th className={cellStyle}>Category</th>
            <th className={cellStyle}>Creation date</th>
            <th className={cellStyle}>Status</th>
            <th className={cellStyle}></th>
          </tr>
        </thead>
        <tbody className="max-md:text-sm max-sm:text-[10px]">
          {newsDataArray.map((newsData, i) => {
            const { title, category, pubDate } = newsData;
            return (
              <tr key={newsData.article_id}>
                <td className={cellStyle}>
                  <div className="flex gap-2 items-center">
                    <Link to={`/manage/edit/${newsData.article_id}`}>
                      <MdEdit className="hover:text-blue-500 hover:scale-125 cursor-pointer" />
                    </Link>
                    <Link to={`/manage/view/${newsData.article_id}`}>
                      <FaEye className="hover:text-blue-500 hover:scale-125 cursor-pointer" />
                    </Link>
                  </div>
                </td>
                <td
                  className={`${cellStyle} w-1/2 hover:underline cursor-pointer`}
                >
                  <Link to={`/manage/view/${newsData.article_id}`}>
                    {title}
                  </Link>
                </td>
                <td className={`capitalize ${cellStyle} text-center`}>
                  {getStringFromArray(category)}
                </td>
                <td className={`${cellStyle} text-center`}>
                  {convertToSimpleDate(pubDate)}
                </td>
                <td className={`${cellStyle} text-center capitalize`}>
                  {/* {category[0] === "sports" ? "Draft" : "Published"} */}
                  {newsData.status
                    ? newsData.status
                    : category[0] === "sports"
                    ? "Draft"
                    : "Published"}
                </td>
                <td className={cellStyle}>
                  <RiDeleteBin5Fill
                    onClick={() => handleDeleteButton(newsData)}
                    className="hover:text-red-400 cursor-pointer hover:scale-125"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default ManageNewsFeed;
