export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}showstories.json`;
export const storyUrl = `${baseUrl}item/`


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