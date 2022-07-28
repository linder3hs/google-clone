import axios from "axios";

const API_URL = "https://google-search3.p.rapidapi.com/api/v1";

export const getResponse = async (url: string) => {
  const response = await axios.get(`${API_URL}${url}`, {
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "EU",
      "X-RapidAPI-Key": "4cc4c577cdmsh6e25517382b8781p16d967jsn992e2eeb5bdc",
      "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
    },
  });
  return response.data;
};
