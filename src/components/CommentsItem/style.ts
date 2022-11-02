import { Button } from "antd";
import styled from "styled-components";

export const CommentText = styled.div({
  marginTop: 10,
  marginLeft: 20,
  padding: "0 30px 10px",
  borderLeft: "1px solid var(--color-primary)",
  fontSize: 15,
  fontWeight: 400,
  lineHeight: "26px",
});

export const UserInfo = styled.div({
  marginLeft: 10,
  fontSize: 12,
  fontWeight: 600,

  span: {
    marginLeft: 10,

    fontSize: 12,
    fontWeight: 600,
  },
});

export const CommentsItemStyle = styled.div<{ level: 1 | 2 }>(
  {},
  ({ level }) => {
    return {
      marginTop: 15,
      marginLeft: level === 2 ? 40 : 0,
    };
  }
);

export const AnswerButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  borderRadius: 20,
  marginTop: 10,
  background: "var(--color-primary)",
  color: "var(--color-white)",
});
