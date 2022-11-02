import React from "react";
import {
  NewsCommentsItemProps,
  NewsInterface,
} from "../../services/interfaces/interfaces";
import { NewsApi } from "../../services/api";
import { ShortText } from "../ShortText/ShortText";
import {
  AnswerButton,
  CommentsItemStyle,
  CommentText,
  UserInfo,
} from "./style";

export const CommentsItem: React.FC<NewsCommentsItemProps> = ({
  comment,
  level,
}): JSX.Element => {
  const [kids, setKids] = React.useState<NewsInterface[]>([]);
  const [showChildComments, setShowChildComments] =
    React.useState<boolean>(true);

  const handleFetchCommentKids = async (): Promise<void> => {
    if (comment.kids?.length !== 0 || comment.kids) {
      const response = await Promise.all(
        comment.kids?.map(async (kid) => {
          const res = await NewsApi.getNewsById(kid);
          return res;
        })
      );
      setKids(response);
    }
    setShowChildComments(false);
  };

  return (
    <CommentsItemStyle level={level} key={comment.id}>
      <UserInfo>
        <span>{comment.by}</span>
      </UserInfo>
      <CommentText>
        <ShortText comment={comment} />
        {showChildComments && comment.kids !== undefined && (
          <AnswerButton onClick={handleFetchCommentKids}>
            Answer...
          </AnswerButton>
        )}
      </CommentText>

      {kids &&
        kids.map((comment: NewsInterface) => (
          <CommentsItem level={2} key={comment.id} comment={comment} />
        ))}
    </CommentsItemStyle>
  );
};
