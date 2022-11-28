import React from "react";
import {
  CollapseDrawerContext,
  CollapseDrawerProvider,
} from "./CollapseDrawerContext";

// import { Container } from './styles';

const AppProvider = ({ children }: any) => {
  return <CollapseDrawerProvider>{children}</CollapseDrawerProvider>;
};

export default AppProvider;
