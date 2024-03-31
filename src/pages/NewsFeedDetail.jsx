import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { NewsInfoContext } from "../context/newsInfoContext";
import { convertToSimpleDate } from "../utils/utils";

const NewsFeedDetail = () => {
  const { newsId } = useParams();
  const { newsDataArray } = useContext(NewsInfoContext);

  // getting the specific news feed object to be shown
  const newsObject = newsDataArray.find(
    (newsData) => newsData.article_id === newsId
  );

  // destructuring the news object
  const {
    article_id,
    image_url,
    title,
    category,
    description,
    pubDate,
    country,
    creator,
    link,
    source_url,
    source_icon,
  } = newsObject;

  return (
    <main className="p-6 flex justify-center">
      <div className="sm:w-[90%] max-sm:w-[95%]">
        <p className="text-gray-400 text-sm">{convertToSimpleDate(pubDate)}</p>
        <div className="relative h-96 bg-gray-100">
          <img
            src={image_url}
            alt="news-visual"
            className="m-auto h-full max-md:object-cover"
          />
          <span className="absolute bottom-2 left-2 bg-blue-500/80 text-white p-2 rounded-md capitalize">
            {category}
          </span>
        </div>
        <div className="flex justify-between text-sm max-sm:text-[10px] text-gray-400">
          {creator && <span>Creator: {creator[0]}</span>}
          <span className="capitalize">{country}</span>
        </div>
        <h3 className="text-xl font-bold my-4">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description} Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Recusandae accusantium autem labore aliquid hic dolor, ad
          doloribus exercitationem, voluptates quaerat iste minus, voluptas
          unde! Suscipit veritatis nostrum incidunt laudantium natus?
        </p>
        {link && (
          <a href={link} target="_blank" className="text-blue-500 underline">
            Whole article
          </a>
        )}
        {source_icon && (
          <div className="flex gap-2 mt-6">
            <img src={source_icon} alt="source" className="w-6" />
            <a href={source_url} target="_blank" className="text-gray-600">
              Source
            </a>
          </div>
        )}
      </div>
    </main>
  );
};

export default NewsFeedDetail;
