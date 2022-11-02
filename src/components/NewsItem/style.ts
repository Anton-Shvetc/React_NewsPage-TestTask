import styled from "styled-components";
import { Link } from "react-router-dom";

export const NewsItemWrapper = styled(Link)({
  marginBottom: 20,
  display: "block",
  border: "1px solid var(--color-secondary)",
  borderRadius: 20,
  textAlign: 'left',
  padding: 20,
  color: "var(--color-black)",

  ":hover": {
    boxShadow: "var(--color-shadow)"
  }
});

export const NewsItemTitle = styled.h5({
  fontSize: 18,
});

export const NewsItemInfo = styled.div({
  display: "flex",
  marginBottom: 10,
});

export const NewsItemElement = styled.span({
  display: "flex",
  alignItems: "center",
  gap: 5,
  marginRight: 15,
});
