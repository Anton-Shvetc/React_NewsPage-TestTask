import React from "react";
import { ShortTextProps } from "../../services/interfaces/interfaces";
import { FullCommentStyle } from "./style";

export const ShortText: React.FC<ShortTextProps> = ({ comment }): JSX.Element => {
  const [commentTextLen, setCommentTextLen] = React.useState<number>(200);

  const showFullComment = (id: number): void => {
    if (id === comment.id) {
      setCommentTextLen(commentTextLen + 1600);
    }
  };

  const hideFullComment = (id: number): void => {
    if (id === comment.id) {
      setCommentTextLen(commentTextLen - 1600);
    }
  };

  if (comment.text?.length >= 200) {
    return (
      <>
        <div
          dangerouslySetInnerHTML={{
            __html: comment.text?.slice(0, commentTextLen),
          }}
        />
        {commentTextLen > 200 ? (
          <FullCommentStyle onClick={() => hideFullComment(comment.id)}>
            Hide
          </FullCommentStyle>
        ) : (
          <FullCommentStyle onClick={() => showFullComment(comment.id)}>
            More...
          </FullCommentStyle>
        )}
      </>
    );
  }
  return <div dangerouslySetInnerHTML={{ __html: comment.text }} />;
};
