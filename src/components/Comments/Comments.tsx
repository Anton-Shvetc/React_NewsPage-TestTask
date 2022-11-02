import React from "react";
import { NewsCommentsProps } from "../../services/interfaces/interfaces";
import { CommentsItem } from "../CommentsItem/CommentsItem";
import { useAppSelector } from "../../hooks/useAppSelector";
import { RetweetOutlined } from "@ant-design/icons";
import {
  CommentsList,
  CommentsStyle,
  CommentsTitle,
  RefreshButton,
} from "./style";
import { Loader } from "../Lodader/Loader";

export const Comments: React.FC<NewsCommentsProps> = ({
  news,
  comments,
  getComments,
}): JSX.Element | null => {
  const { commentsLoading } = useAppSelector((state) => state.comments);

  return news.descendants !== 0 ? (
    <CommentsStyle>
      <CommentsTitle>{news.descendants} Comments</CommentsTitle>
      <RefreshButton onClick={getComments}>
        <span>Refresh</span>
        <RetweetOutlined />
      </RefreshButton>
      {commentsLoading ? (
        <Loader />
      ) : (
        <CommentsList>
          {comments.map((comment) => (
            <CommentsItem level={1} key={comment.id} comment={comment} />
          ))}
        </CommentsList>
      )}
    </CommentsStyle>
  ) : null;
};
