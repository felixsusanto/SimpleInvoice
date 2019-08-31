import React from "react";
import styled from "styled-components";
import ObjectTable from "components/ObjectTable/ObjectTable";
import Modal from "../../components/Modal/Modal";
import ClientForm from "./components/ClientForm";
import { connect } from "react-redux";
import { actionAddClient } from "data/clients/ducks";

const ClientsWrapper = styled.div`
  padding: 20px 0;

`;
const EmptyComponent = () => {
  return (
    <div className="card">
      <div className="card-body text-center text-primary">
        <i className="fal fa-comments-dollar fa-5x" />
        <p className="text-center lead " style={{ marginTop: "10px" }}>
          No Clients found.
          <br />
          <small>Add some clients to start invoicing</small>
        </p>
      </div>
    </div>
  );
};

const ConnectedTable = connect(
  (state) => ({
    data: state.clients
  })
)(ObjectTable)

class Clients extends React.PureComponent {
  state = {
    modalOpen: false,
    initValues: null
  };

  addCol = {
    additionalCols: {
      header: <th>Call to Action</th>,
      body: idx => (
        <td>
          <div
            className="btn btn-primary btn-sm"
            onClick={() => {
              this.setState({
                initValues: {...this.props.clients[idx]},
                modalOpen: true
              });
            }}
          >
            <i className="fal fa-pencil" />
          </div>{" "}
          <div
            className="btn btn-danger btn-sm"
            onClick={() => console.log(idx)}
          >
            <i className="fal fa-trash" />
          </div>
        </td>
      )
    }
  };

  render() {
    return (
      <React.Fragment>
        <ClientsWrapper>
          <div className="container">
            <h3>
              <div
                className="btn btn-primary float-right"
                onClick={() => this.setState({ modalOpen: true })}
              >
                <i className="fas fa-plus fa-fw" /> Add Client
              </div>
              Clients
            </h3>
            <hr />
            <p>List of your client goes here...</p>
            <ConnectedTable emptyComponent={<EmptyComponent />} {...this.addCol}/>
          </div>
        </ClientsWrapper>
        {this.state.modalOpen && (
          <Modal
            title="Add Client"
            onCloseModal={() => this.setState({ modalOpen: false })}
          >
            <ClientForm
              onSubmit={values => {
                this.props.actionAddClient(values);
                this.setState({ modalOpen: false });
              }}
              initialValues={this.state.initValues}
            />
          </Modal>
        )}
      </React.Fragment>
    );
  }
};

export default connect(
  (state) => ({
    clients: state.clients
  }),
  {
    actionAddClient
  }
)(Clients);