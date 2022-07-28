import { getResponse } from "./response";

export const getSearch = async (param: string) => {
  try {
    return await getResponse(`/search/q=${param}`);
  } catch (error) {
    return error;
  }
};

export const getImages = async (param: string) => {
  try {
    return await getResponse(`/image/q=${param}`);
  } catch (error) {
    return error;
  }
};

export const getVideos = async (param: string) => {
  try {
    return await getResponse(`/videos/q=${param}`);
  } catch (error) {
    return error;
  }
};

export const getNews = async (param: string) => {
  try {
    return await getResponse(`/news/q=${param}`);
  } catch (error) {
    return error;
  }
};
