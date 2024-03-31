import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NewsInfoContext } from "../context/newsInfoContext";
import { Spinner, useToast } from "@chakra-ui/react";

const NewsEditPage = () => {
  const { newsId } = useParams();
  const { newsDataArray, handleEditnews } = useContext(NewsInfoContext);
  const newsFeed = newsDataArray.find(
    (newsData) => newsData.article_id === newsId
  );
  const { article_id, title, description, category, image_url } = newsFeed;
  const [newsDetails, setNewsDetails] = useState({
    title: title,
    description: description,
    category: category[0],
    media: image_url,
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  // function to handle input, textarea and select tags
  const handleChange = (e) => {
    setNewsDetails({ ...newsDetails, [e.target.name]: e.target.value });
  };

  // function to get the url of image being uploaded(using cloudinary)
  const handleMediaChange = async (e) => {
    setIsLoading(true);
    try {
      const file = e.target.files[0];
      const imageForm = new FormData();
      imageForm.append("file", file);
      imageForm.append("cloud_name", "dxn1nqijs");
      imageForm.append("upload_preset", "internvilla");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dxn1nqijs/image/upload",
        {
          method: "POST",
          body: imageForm,
        }
      );
      const data = await response.json();
      setNewsDetails({ ...newsDetails, media: data.secure_url });
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // function to save the edit details in the main array
  const handleDoneButton = () => {
    handleEditnews(article_id, newsDetails);
    navigate("/manage");
    toast({
      title: "Edited successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <main className="p-6">
      <h2 className="text-xl font-semibold mb-4">Edit news feed</h2>
      <form className="flex flex-col items-start gap-4">
        <label className="flex flex-col gap-1 text-sm w-full">
          Title
          <input
            type="text"
            name="title"
            placeholder="Title"
            required
            value={newsDetails.title}
            onChange={handleChange}
            className="border shadow-md text-base rounded-md p-2 outline-none w-full"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm w-full">
          Description
          <textarea
            name="description"
            required
            value={newsDetails.description}
            onChange={handleChange}
            placeholder="Enter content..."
            className="border shadow-md rounded-md p-2 outline-none text-base"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm w-1/2">
          Choose category
          <select
            value={newsDetails.category}
            name="category"
            onChange={handleChange}
            className={`border p-2 shadow-md rounded-md outline-none text-base ${
              newsDetails.category === "not-selected" ||
              newsDetails.category === ""
                ? "text-gray-400"
                : "text-black"
            }`}
          >
            <option value="not-selected">Not Selected</option>
            <option value="sports">Sports</option>
            <option value="politics">Politics</option>
            <option value="top">Top</option>
            <option value="entertainment">Entertainment</option>
            <option value="technology">Technology</option>
            <option value="business">Business</option>
            <option value="crime">Crime</option>
            <option value="domestic">Domestic</option>
            <option value="education">Education</option>
            <option value="environment">Environment</option>
            <option value="food">Food</option>
            <option value="health">Health</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="other">Other</option>
            <option value="science">Science</option>
            <option value="tourism">Tourism</option>
            <option value="world">World</option>
          </select>
        </label>

        <section className="flex flex-col gap-1">
          <p className="text-sm">Media</p>
          {newsDetails.media && (
            <img
              src={newsDetails.media}
              alt="media"
              className="w-20 h object-cover"
            />
          )}
          <label className="border p-1 cursor-pointer flex justify-center">
            <input
              type="file"
              name="media"
              required
              accept="image/*,video/*"
              onChange={handleMediaChange}
              className="hidden"
            />
            {isLoading ? <Spinner size="sm" /> : "Choose Media"}
          </label>
        </section>

        <button
          onClick={handleDoneButton}
          className="bg-blue-500 text-white px-6 py-2 rounded-md"
        >
          Done
        </button>
      </form>
    </main>
  );
};

export default NewsEditPage;
