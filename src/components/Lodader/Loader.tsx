import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";
import { LoaderStyle } from "./style";


export const Loader: React.FC = (): JSX.Element => {

  const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;

  return (
    <LoaderStyle>
      <Spin indicator={antIcon}  />
    </LoaderStyle>
  );
};
