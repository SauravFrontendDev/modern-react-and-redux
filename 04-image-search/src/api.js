import axios from "axios";

const searchImages = async (searchTerm) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID AGJ4hmzU-OyDTparzNw0opkF6ITeE25UraSlK50cuWs",
    },
    params: {
      query: searchTerm,
    },
  });

  // console.log(response.data.results);
  return response;
};

export default searchImages;
