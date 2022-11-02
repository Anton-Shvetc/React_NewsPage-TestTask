import React from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { fetchNews } from "../redux/slices/newsSlice";
import { useAppSelector } from "../hooks/useAppSelector";
import { News } from "../components/News/News";

export const Home: React.FC = (): JSX.Element => {
  const { news } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();

  const getNews = (): void => {
    dispatch(fetchNews());
  };

  React.useEffect(() => {
    if (news.length === 0) {
      getNews();
    }
    const interval = setInterval(() => {
      getNews();
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <News getNews={getNews} />;
};
