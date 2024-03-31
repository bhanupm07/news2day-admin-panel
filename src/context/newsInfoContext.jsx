import { createContext, useEffect, useState } from "react";
import nextId from "react-id-generator";
import { useNavigate } from "react-router-dom";

export const NewsInfoContext = createContext();

export const NewsProvider = ({ children }) => {
  const [newsDataArray, setNewsDataArray] = useState([]);
  const [mobileView, setMobileView] = useState(false);
  const [formDetails, setFormDetails] = useState({
    title: "",
    content: "",
    category: "",
    media: "",
    pubDate: "",
    status: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllNews();
  }, []);

  // async function to fetch all news data from the news api.
  const fetchAllNews = async () => {
    // const response = await fetch(
    //   `https://newsapi.org/v2/top-headlines?country=us&apiKey=2329f82524e041a5a70d2e8ec120f551`
    // );
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_40768e3d8209d2affde8ef1af7de193aef873&q=pegasus&language=en`
    );
    const data = await response.json();
    setNewsDataArray([...data.results]);
    console.log(data);
  };

  // function to open the mobile view modal
  const handleMobileView = () => {
    setMobileView(!mobileView);
  };

  // function to delete a news feed
  const handleDeleteNews = (id) => {
    setNewsDataArray([
      ...newsDataArray.filter((news) => news.article_id !== id),
    ]);
  };

  // function to edit a news feed
  const handleEditnews = (id, { title, description, category, media }) => {
    let indexToEdit;
    newsDataArray.forEach((news, i) => {
      if (news.article_id === id) indexToEdit = i;
    });
    setNewsDataArray((prevNewsDataArray) => {
      // Make a shallow copy of the array
      const updatedNewsDataArray = [...prevNewsDataArray];

      // Make a copy of the object you want to update and update it with newData
      updatedNewsDataArray[indexToEdit] = {
        ...updatedNewsDataArray[indexToEdit],
        title,
        description,
        category: [category],
        image_url: media,
      };

      // Use setNewsDataArray with the updated array
      return updatedNewsDataArray;
    });
  };

  const handleCreateNews = () => {
    setNewsDataArray([
      {
        ...formDetails,
        article_id: nextId(),
        category: [formDetails.category],
        image_url: formDetails.media,
        description: formDetails.content,
      },
      ...newsDataArray,
    ]);
    navigate("/manage");
  };

  return (
    <NewsInfoContext.Provider
      value={{
        newsDataArray,
        formDetails,
        setFormDetails,
        handleMobileView,
        mobileView,
        handleDeleteNews,
        handleEditnews,
        handleCreateNews,
      }}
    >
      {children}
    </NewsInfoContext.Provider>
  );
};
