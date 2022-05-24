import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_MY_API_KEY,
  },
});

export default axiosInstance;

export const imagePath = "https://image.tmdb.org/t/p/original/";
