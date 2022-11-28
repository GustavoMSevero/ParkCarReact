import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import useCollapseDrawer from "../../hooks/useCollapseDrawer";
import useResponsive from "../../hooks/useResponsive";
import ContentHeader from "./components/ContentHeader";
import DashboardHeader from "./components/Header";
import NavBar from "./components/Navbar";

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { collapseClick, isCollapse } = useCollapseDrawer();
  return (
    <Wrapper>
      <Sidebar>
        <DashboardHeader />
        <NavBar />
      </Sidebar>
      <Content>
        <ContentHeader />
        <PageContent>
          <Outlet />
        </PageContent>
      </Content>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Sidebar = styled.div`
  width: 200px;
  z-index: 2;
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.3) 5px 0px 8px;
`;

const Content = styled.div`
  flex: 1;
`;

const PageContent = styled.div`
  margin: 1.25rem;
`;
