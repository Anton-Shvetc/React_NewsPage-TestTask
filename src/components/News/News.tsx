import React from "react";
import { NewsItem } from "../NewsItem/NewsItem";
import { NewsInterface, NewsProps } from "../../services/interfaces/interfaces";
import { useAppSelector } from "../../hooks/useAppSelector";
import { RetweetOutlined } from "@ant-design/icons";
import { NewsItems, NewsStyle, RefreshButton } from "./style";
import { Loader } from "../Loader/Loader";

export const News: React.FC<NewsProps> = ({ getNews }): JSX.Element => {
  const { news, isLoading } = useAppSelector((state) => state.news);

  const sortedNewsByDate: NewsInterface[] = [...news]?.sort(
    (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <NewsStyle>
          <RefreshButton onClick={getNews}>
            <span>Refresh</span>
            <RetweetOutlined />
          </RefreshButton>
          <NewsItems>
            {sortedNewsByDate.map((data: NewsInterface) => (
              <NewsItem key={data.id} news={data} />
            ))}
          </NewsItems>
        </NewsStyle>
      )}
    </>
  );
};
