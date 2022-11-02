import { Button } from "antd";
import styled from "styled-components";

export const CommentsStyle = styled.div({
  marginTop: 20,
  marginBottom: 20,
  padding: 40,
  borderRadius: 16,
  backgroundColor: "var(--color-white)",
  border: "1px solid var(--color-secondary)",

  ":hover": {
    boxShadow: "var(--color-shadow)",
  },
});

export const CommentsList = styled.div({
  margin: "40px 0",
  padding: 0,
});

export const RefreshButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  borderRadius: 20,
  color: "var(--color-primary)",

  span: {
    display: "flex",
    alignItems: "center",
  },
  ":hover": {
    background: "var(--color-primary)",
    color: "var(--color-white)",
  },
});

export const CommentsTitle = styled.h2({
  marginTop: 0,
  marginBottom: 20,
});
