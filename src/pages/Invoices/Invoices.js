import React from "react";
import styled from "styled-components";
import ObjectTable from "components/ObjectTable/ObjectTable";
import stubs from "components/Template/stubs";
import moment from "moment";

const Wrapper = styled.div`
  padding: 20px 0;
`;

const SampleData = [...Array(10).keys()]
  .map(idx => {
    const format = "DD MMM YYYY";
    const dateIssued = moment(new Date(stubs.dates.issued)).format(format);
    const dateDue = moment(new Date(stubs.dates.due)).format(format);
    return {
      clientName: stubs.client.companyName,
      dateIssued,
      dateDue,
      invoiceId: stubs.invoice.id
    };
  })
;

const Invoices = () => {
  return (
    <Wrapper>
      <div className="container">
        <h3>
          <div className="btn btn-primary float-right">
            <i className="fas fa-plus fa-fw" /> Add Invoice
          </div>
          Invoices
        </h3>
        <hr />
        <p>List of your invoices goes here...</p>
        <ObjectTable data={SampleData} emptyComponent={"<EmptyComponent/>"}/>
      </div>
    </Wrapper>
  );
};

export default Invoices;
