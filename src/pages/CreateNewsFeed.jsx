import { Spinner, useToast } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { NewsInfoContext } from "../context/newsInfoContext";

const CreateNewsFeed = () => {
  const { formDetails, setFormDetails, handleMobileView, handleCreateNews } =
    useContext(NewsInfoContext);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  // handling input and select tags
  const handleChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  // function to get the image url for the uploaded image (using cloudinary)
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
      setFormDetails({ ...formDetails, media: data.secure_url });
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // function handling both 'mobile view' and 'create' buttons
  const handleButtonClick = (e) => {
    e.preventDefault();

    const everythingFilled =
      formDetails.title &&
      formDetails.content &&
      formDetails.category &&
      formDetails.category !== "not-selected" &&
      formDetails.media &&
      formDetails.pubDate &&
      formDetails.status;

    if (!everythingFilled) {
      toast({
        title: "Enter every field",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      if (e.target.textContent === "View on mobile screen") {
        handleMobileView();
      } else if (e.target.textContent === "Create") {
        handleCreateNews();
        toast({
          title: "News feed created successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setFormDetails({ title: "", content: "", category: "", media: "" });
      }
    }
  };

  return (
    <main className="p-6">
      <h2 className="text-xl font-medium mb-6">Create your news feed</h2>
      <form className="flex flex-col items-start gap-4 lg:w-4/5">
        <label className="flex flex-col gap-1 text-sm w-full">
          Title
          <input
            type="text"
            name="title"
            placeholder="Title"
            required
            value={formDetails.title}
            onChange={handleChange}
            className="border shadow-md text-base rounded-md p-2 outline-none w-full"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm w-full">
          Content
          <textarea
            name="content"
            required
            value={formDetails.content}
            onChange={handleChange}
            placeholder="Enter content..."
            className="border shadow-md rounded-md p-2 outline-none text-base"
          />
        </label>

        <div className="flex justify-between gap-4 w-full">
          <label className="flex flex-col gap-1 text-sm w-[40%]">
            Choose category
            <select
              value={formDetails.category}
              name="category"
              onChange={handleChange}
              className={`border p-2 shadow-md rounded-md outline-none text-base ${
                formDetails.category === "not-selected" ||
                formDetails.category === ""
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

          <label className="flex flex-col gap-1 text-sm w-[40%]">
            Choose status
            <select
              value={formDetails.status}
              name="status"
              onChange={handleChange}
              className={`border p-2 shadow-md rounded-md outline-none text-base ${
                formDetails.status === "not-selected" ||
                formDetails.status === ""
                  ? "text-gray-400"
                  : "text-black"
              }`}
            >
              <option value="not-selected">Not Selected</option>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </label>
        </div>

        <div className="flex justify-between gap-4 w-full">
          <section className="flex flex-col gap-1">
            <p className="text-sm">Media</p>
            <div className="flex flex-row-reverse gap-4 items-center">
              {formDetails.media && (
                <img
                  src={formDetails.media}
                  alt="media"
                  className="w-16 h object-cover"
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
            </div>
          </section>

          <label className="flex flex-col gap-1 text-sm w-[40%]">
            <p className="text-sm">Date</p>
            <input
              type="date"
              name="pubDate"
              required
              onChange={handleChange}
              className="border shadow-md rounded-md p-2 outline-none text-base"
            />
          </label>
        </div>

        <div className="flex justify-evenly w-full">
          <button
            onClick={handleButtonClick}
            className="bg-green-500 text-white px-6 py-2 rounded-md"
          >
            View on mobile screen
          </button>
          <button
            onClick={handleButtonClick}
            className="bg-blue-500 text-white px-6 py-2 rounded-md"
          >
            Create
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateNewsFeed;
