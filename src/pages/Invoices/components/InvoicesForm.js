import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { required, formatNumberToString } from "utilities/utils";
import { ConnectedAutoIdInvoice } from "components/AutoIdSerial";
import _ from "lodash";

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
  const { input } = props;
  return (
    <input
      className="form-control"
      type="date"
      value={input.value}
      onChange={input.onChange}
    />
  );
};

const renderDetails = props => {
  const { fields } = props;
  if (_.isEmpty(fields)) fields.push({});
  return (
    <ul className="list-unstyled">
      <li>
        <div className="btn btn-primary" onClick={() => fields.push({})}>
          Add Item
        </div>
      </li>
      {fields.map((item, index) => {
        return (
          <li key={index}>
            <hr />
            <div className="form-row">
              <div className="col">
                <div className="form-group">
                  <label>Title</label>
                  <Field
                    component="input"
                    name={`${item}.title`}
                    type="text"
                    className="form-control"
                    placeholder="Enter Title"
                    validate={[required]}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>Rate</label>
                  <Field
                    component="input"
                    name={`${item}.rate`}
                    type="text"
                    className="form-control"
                    placeholder="Enter Rate"
                    validate={[required]}
                    format={formatNumberToString}
                    parse={Number}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>Quantity</label>
                  <Field
                    component="input"
                    name={`${item}.qty`}
                    type="text"
                    className="form-control"
                    placeholder="Enter Quantity"
                    validate={[required]}
                    format={formatNumberToString}
                    parse={Number}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <Field
                component="textarea"
                name={`${item}.description`}
                className="form-control"
                placeholder="Enter Description"
                validate={[required]}
              />
            </div>
            {fields.length > 1 && (
              <div
                className="btn btn-danger"
                onClick={() => fields.remove(index)}
              >
                Remove Item
              </div>
            )}
          </li>
        );
      })}
    </ul>
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
          format={formatNumberToString}
          parse={Number}
        />
      </div>
      <p className="lead">Fill your billing details: </p>
      <FieldArray name="invoice.details" component={renderDetails} />
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
