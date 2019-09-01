import React from "react";
import styled from "styled-components";
import ObjectTable from "components/ObjectTable/ObjectTable";
import stubs from "components/Template/stubs";
import moment from "moment";
import Modal from "components/Modal/Modal";
import InvoicesForm from "./components/InvoicesForm";

const Wrapper = styled.div`
  padding: 20px 0;
`;

export const SampleData = [...Array(10).keys()].map(idx => {
  const format = "DD MMM YYYY";
  const dateIssued = moment(new Date(stubs.dates.issued)).format(format);
  const dateDue = moment(new Date(stubs.dates.due)).format(format);
  return {
    clientName: stubs.client.companyName,
    dateIssued,
    dateDue,
    invoiceId: stubs.invoice.id
  };
});

const EmptyComponent = () => {
  return (
    <div className="card">
      <div className="card-body text-center text-primary">
        <i className="fal fa-file-invoice-dollar fa-5x" />
        <p className="text-center lead " style={{ marginTop: "10px" }}>
          No Records found yet.
          <br />
          <small>
            You'll need to have client and filled your details to get started
          </small>
        </p>
      </div>
    </div>
  );
};

class Invoices extends React.PureComponent {
  state = {
    modalOpen: false
  };

  onCloseHandler = () => {
    this.setState({ modalOpen: false });
  };

  formSubmitHandler = value => {
    console.log(value);
  };

  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <div className="container">
            <h3>
              <div
                className="btn btn-primary float-right"
                onClick={() => this.setState({ modalOpen: true })}
              >
                <i className="fas fa-plus fa-fw" /> Add Invoice
              </div>
              Invoices
            </h3>
            <hr />
            <p>List of your invoices goes here...</p>
            <ObjectTable data={[]} emptyComponent={<EmptyComponent />} />
          </div>
        </Wrapper>
        {this.state.modalOpen && (
          <Modal
            title="Add Invoice"
            modalScrollable
            onCloseModal={this.onCloseHandler}
          >
            <InvoicesForm
              onSubmit={this.formSubmitHandler}
              initialValues={{
                dates: {
                  issued: moment().format("YYYY-MM-DD"),
                  due: moment()
                    .add(14, "days")
                    .format("YYYY-MM-DD")
                }
              }}
            />
          </Modal>
        )}
      </React.Fragment>
    );
  }
}

export default Invoices;
