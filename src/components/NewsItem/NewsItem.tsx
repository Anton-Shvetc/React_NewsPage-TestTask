import React from "react";

import { NewsItemProps } from "../../services/interfaces/interfaces";
import {
  NewsItemElement,
  NewsItemInfo,
  NewsItemTitle,
  NewsItemWrapper,
} from "./style";
import {
  CalendarOutlined,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const NewsItem: React.FC<NewsItemProps> = ({ news }): JSX.Element => {
  const date = new Date(news.time * 1000);

  return (
    <NewsItemWrapper to={`/news/${news.id}`}>
      <NewsItemTitle>{news.title}</NewsItemTitle>
      <NewsItemInfo>
        <NewsItemElement>
          <UserOutlined />
          {news.by}
        </NewsItemElement>
        <NewsItemElement>
          <CalendarOutlined />
          {date.toLocaleDateString()}
        </NewsItemElement>
        <NewsItemElement>
          <StarOutlined />
          {news.score}
        </NewsItemElement>
      </NewsItemInfo>
    </NewsItemWrapper>
  );
};
