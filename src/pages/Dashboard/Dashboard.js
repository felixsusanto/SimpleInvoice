import React from "react";
import styled from "styled-components";
import NavMenu from "./data/NavMenu";

const MainDashboardArea = styled.div`
  background: #f6f7fc;
`;
const LeftBar = styled.div`
  background: #fff;
  min-height: 100vh;
  width: 20%;
  max-width: 250px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
`;
const DashboardContainer = styled.div`
  min-height: 100vh;
  color: #4b4b55;
  display: flex;
  ${MainDashboardArea} {
    flex: 1;
  }
  ${LeftBar} {
    position: relative;
    z-index: 1;
  }
`;



class Dashboard extends React.PureComponent {
  render() {
    return (
      <DashboardContainer>
        <LeftBar className="no-print">
          <NavMenu />
        </LeftBar>
        <MainDashboardArea>
          {this.props.children}
        </MainDashboardArea>
      </DashboardContainer>
    );
  }
}

export default Dashboard;