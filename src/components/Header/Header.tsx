import React from "react";
import { Link } from "react-router-dom";
import { HeaderNavigate, HeaderTitle } from "./style";

export const Header: React.FC = (): JSX.Element => {
  return (
    <header>
      <HeaderNavigate>
        <Link to="/">
          <HeaderTitle>The Hacker News</HeaderTitle>
        </Link>
      </HeaderNavigate>
    </header>
  );
};
