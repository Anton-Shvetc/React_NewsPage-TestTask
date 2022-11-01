import React from "react";
import { useState, useEffect } from "react";
import { Story } from "../components/Story";
import { getStoryIds, getStory } from "../services/api";

export function Home() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getStoryIds().then((res: number[]) =>{
      setData(res)}
    );
  }, []);


  return (
    <>
      {data.map((item: number) => (
        <Story key={item} storyId={item} />
      ))}

      
    </>
 
  );
}
