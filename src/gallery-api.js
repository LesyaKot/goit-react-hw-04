import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "u3qo2uYj0EO8tJoWMOsjjhYe2pOYywYu2TqnyChvGG8";

export const fetchPhotos = async (searchQuery, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: ACCESS_KEY,
      query: searchQuery,
      per_page: 10,
      page: currentPage,
    },
  });

  return response.data.results;
};
