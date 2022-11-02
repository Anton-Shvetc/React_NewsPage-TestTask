import axios from "axios";
import { NewsInterface } from "./interfaces/interfaces";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";

const instance = axios.create({
  baseURL: baseUrl,
});

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
