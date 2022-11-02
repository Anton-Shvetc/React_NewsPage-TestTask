import { Button } from "antd";
import styled from "styled-components";

export const NewsStyle = styled.div({
  width: 1024,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
});

export const RefreshButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  borderRadius: 20,
  width: "10%",
  marginLeft: "auto",
  background: "var(--color-primary)",
  color: "var(--color-white)",

  span: {
    display: "flex",
    alignItems: "center",
  },
});

export const NewsItems = styled.div({
  marginTop: 20,
});