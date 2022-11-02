import axios from "axios";
import { NewsInterface } from "./interfaces/interfaces";


export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}showstories.json`;
export const storyUrl = `${baseUrl}item/`


//import { baseUrl } from "../index";
// import { NewsInterface } from "../../interfaces/news.interface";

// export const baseUrl = "https://hacker-news.firebaseio.com/v0";

const instance = axios.create({
  baseURL: baseUrl,
});




export const getStoryIds = async() => {

	const result = await fetch(newStoriesUrl)
	.then(res => res.json())

	return result

}

export const getStory= async(storyId : number | string) => {

	const result = await fetch(`${storyUrl + storyId}.json`)
	.then(res => res.json())

	return result

}

 export  const getComments = async (id: number | string) => {
   const result = await fetch(
     `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
   ).then((res) => res.json());

   return result;
 };

 export class NewsApi {
   static async getNews(): Promise<number[]> {
     const response = await instance
       .get("/topstories.json")
       .then(({ data }) => data)
       .catch((err) => console.warn(err));
     return response;
   }
   static async getNewsById(newsId: number): Promise<NewsInterface> {
     const response = await instance
       .get(`/item/${newsId}.json`)
       .then(({ data }) => data)
       .catch((err) => console.warn(err));
     return response;
   }
 }
