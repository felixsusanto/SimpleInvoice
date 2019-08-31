import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const UlStyle = styled.div`
  margin-top: 60px;
  list-style: none;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  color: #bac7cd;
  
  a {
    display: block;
    color: #000;
    padding: 10px 15px;
    position: relative;
    &:before {
      content: "";
      display: block;
      position: absolute;
      height: 100%;
      width: 3px;
      top: 0;
      left: 0;
    }
    &.active, &:hover {
      cursor: pointer;
      text-decoration: none;
      background: #eef8fa;
      color: #0266ff;
      &:before {
        background: #3784ec;
      }
    }
  }
`;

const menu = [
  {
    label: "Overview",
    icon: "fal fa-chart-area",
    route: "/overview"
  },
  {
    label: "Clients",
    icon: "fal fa-user-tie",
    route: "/clients"
  },
  {
    label: "Invoices",
    icon: "fal fa-file-invoice",
    route: "/invoices"
  },
  {
    label: "Your Details",
    icon: "fal fa-cog",
    route: "/settings"
  }
];

const NavMenu = props => {
  return (
    <UlStyle>
      {menu.map((obj, idx) => (
        <NavLink key={idx} to={obj.route}>
          <i className={`fa-fw ${obj.icon}`} /> {obj.label}
        </NavLink>
      ))} 
    </UlStyle>
  );
};

export default withRouter(NavMenu);