import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { required } from "utilities/utils";
import moment from "moment";
import { ConnectedAutoIdInvoice } from "components/AutoIdSerial";

const CustomSelect = props => {
  const { input, placeholder, options } = props;
  return (
    <select
      className="custom-select"
      defaultValue={input.value}
      onChange={input.onChange}
    >
      <option value="">{placeholder}</option>
      {options.map((obj, idx) => {
        return (
          <option key={idx} value={obj.value}>
            {obj.label}
          </option>
        );
      })}
    </select>
  );
};

const Datepicker = props => {
  const { input, defaultValue } = props;
  return (
    <input
      className="form-control"
      type="date"
      defaultValue={defaultValue}
      onChange={input.onChange}
    />
  );
};

const InvoicesForm = props => {
  const { isUpdating, clients } = props;
  const clientOptions = clients.map((obj, idx) => ({
    label: `${obj.companyName} - ${obj.contactPerson}`,
    value: obj.id
  }));
  return (
    <form onSubmit={props.handleSubmit}>
      <p className="lead">Pick a client from the list: </p>
      <div className="form-group">
        <label>Client</label>
        <Field
          component={CustomSelect}
          options={clientOptions}
          name="clientId"
          type="text"
          className="form-control"
          placeholder="Select a client"
          validate={[required]}
        />
      </div>
      <p className="lead">Fill your invoice details: </p>
      <Field
        component={ConnectedAutoIdInvoice}
        name="invoice.id"
        label="Invoice ID"
        prefix="invoice_"
        maskDigit="0000000"
      />
      <div className="form-row">
        <div className="col">
          <div className="form-group">
            <label>Date Issued</label>
            <Field
              component={Datepicker}
              name="dates.issued"
              className="form-control"
              placeholder="Select a date"
              defaultValue={moment().format("YYYY-MM-DD")}
              validate={[required]}
            />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label>Date Due</label>
            <Field
              component={Datepicker}
              name="dates.due"
              className="form-control"
              placeholder="Select a date"
              defaultValue={moment()
                .add(14, "days")
                .format("YYYY-MM-DD")}
              validate={[required]}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label>Amount Paid</label>
        <Field
          component="input"
          name="invoice.amountPaid"
          className="form-control"
          placeholder="Enter downpayment made by client"
          validate={[required]}
          format={number => {
            return typeof number === "undefined" ? "" : String(number);
          }}
          parse={Number}
        />
      </div>
      <p className="lead">Fill your billing details: </p>

      <div className="float-right">
        <button type="submit" className="btn btn-primary">
          {isUpdating === -1 ? "Add Client" : "Update Client"}
        </button>
      </div>
    </form>
  );
};
InvoicesForm.defaultProps = {
  onAddClient: () => {}
};

export default compose(
  connect(state => ({
    clients: state.clients
  })),
  reduxForm({
    form: "InvoicesForm"
  })
)(InvoicesForm);
