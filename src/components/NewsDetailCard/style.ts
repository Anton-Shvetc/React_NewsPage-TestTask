import { MessageOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styled from "styled-components";

export const ButtonNavigate = styled(Button)({
  borderRadius: 20,
  background: "var(--color-white)",
  color: "var(--color-primary)",

  ":hover": {
    background: "var(--color-primary)",
    color: "var(--color-white)",
  },
});

export const NewsDetailStyle = styled.div({
  width: 1024,
  margin: "0 auto",
});

export const NewsDetailWrapper = styled.div({
  marginTop: 20,
  padding: 20,
  cursor: "pointer",
  transition: "all .2s",
  borderRadius: 16,
  backgroundColor: "var(--color-white)",
  border: " 1px solid var(--color-secondary)",
  ":hover": {
    boxShadow: "var(--color-shadow)",
  },
});

export const NewsDetailTitle = styled.h2({
  marginBottom: 0,
  padding: 0,
  fontSize: 24,
  fontWeight: "bold",
});

export const NewsDetailInfo = styled.div({
  display: "flex",
  justifyContent: "space-between",
  width: 300,
  marginBottom: 20,
});

export const NewsDetailElement = styled.span({
  display: "flex",
  alignItems: "center",
  gap: 5,
  marginRight: 15,
  marginTop: 20,
});

export const CommentsIcon = styled(MessageOutlined)({
  fontSize: 18,
});
