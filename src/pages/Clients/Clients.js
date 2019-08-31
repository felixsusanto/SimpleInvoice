import React from "react";
import styled from "styled-components";
import ObjectTable from "components/ObjectTable/ObjectTable";

const ClientsWrapper = styled.div`
  padding: 20px 0;

`;

const Clients = () => {
  return (
    <ClientsWrapper>
      <div className="container">
        <h3>
          <div className="btn btn-primary float-right">
            <i className="fas fa-plus fa-fw" /> Add Client
          </div>
          Clients
        </h3>
        <hr />
        <p>List of your client goes here...</p>
        <ObjectTable />
      </div>
    </ClientsWrapper>
  );
};

export default Clients;