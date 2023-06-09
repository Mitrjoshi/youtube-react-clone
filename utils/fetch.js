import axios from "axios";
import { RAPID_API_KEY, RAPID_API_HOST } from "./apikeys.js";

const BASE_URL = "https://yt-api.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  headers: {
    "X-RapidAPI-Key": RAPID_API_KEY,
    "X-RapidAPI-Host": RAPID_API_HOST,
  },
};

export const fetchVideos = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/${query}`, options);
  return data;
};
