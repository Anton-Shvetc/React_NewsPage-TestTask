import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchComments } from "../../redux/slices/commentsSlice";
import { fetchNewsById } from "../../redux/slices/newsSlice";
import { Comments } from "../Comments/Comments";
import { Spin } from "antd";
import {
  CalendarOutlined,
  LoadingOutlined,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  ButtonNavigate,
  CommentsIcon,
  NewsDetailElement,
  NewsDetailInfo,
  NewsDetailStyle,
  NewsDetailTitle,
  NewsDetailWrapper,
} from "./style";
import { Loader } from "../Lodader/Loader";

export const NewsCard: React.FC = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  const { newsById, isLoading, params } = useAppSelector((state) => state.news);
  const { comments } = useAppSelector((state) => state.comments);
  const dispatch = useAppDispatch();



  const date = new Date(newsById.time * 1000);
  const getNewsById = (): void => {
    dispatch(fetchNewsById(Number(id)));
  };

  const getComments = (): void => {
    dispatch(fetchComments(Number(id)));
  };

  React.useEffect(() => {
    const findId = params.find((comment) => comment === Number(id));
    if (!findId) {
      getNewsById();
      getComments();
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <NewsDetailStyle>
          <Link to="/">
            <ButtonNavigate>На главную</ButtonNavigate>
          </Link>
          <NewsDetailWrapper>
            <NewsDetailTitle>{newsById.title}</NewsDetailTitle>

            <NewsDetailInfo>
              <NewsDetailElement>
                <CalendarOutlined />
                <span>{date.toLocaleDateString()}</span>
              </NewsDetailElement>
              <NewsDetailElement>
                <UserOutlined />
                <span>{newsById.by}</span>
              </NewsDetailElement>
              <NewsDetailElement>
                <StarOutlined />
                <span>{newsById.score}</span>
              </NewsDetailElement>
            </NewsDetailInfo>
            <a href={newsById.url}>
              <ButtonNavigate>Full version</ButtonNavigate>
            </a>
            <NewsDetailElement>
              <CommentsIcon />
              <span>
                {newsById.descendants ? newsById.descendants : "Be the first!"}
              </span>
            </NewsDetailElement>
          </NewsDetailWrapper>

          <Comments
            getComments={() => getComments()}
            comments={comments}
            news={newsById}
          />
        </NewsDetailStyle>
      )}
    </>
  );
};
