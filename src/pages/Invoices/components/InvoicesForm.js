import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";

const required = value =>
  value || typeof value === "number" ? undefined : "Required";

const CustomSelect = props => {
  const { input, placeholder, options } = props;
  return (
    <select className="custom-select"
      defaultValue={input.value}
      onChange={input.onChange}
    >
      <option value="">{placeholder}</option>
      {options.map((obj, idx) => {
        return (
          <option
            key={idx}
            value={obj.value}
          >
            {obj.label}
          </option>
        );
      })}
    </select>
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
          name="contactPerson"
          type="text"
          className="form-control"
          placeholder="Select a client"
          validate={[required]}
        />
      </div>
      <p className="lead">Fill your invoice details: </p>
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
    clients: state.clients,
    initialValues: {
      contactPerson: "321"
    }
  })),
  reduxForm({
    form: "InvoicesForm"
  })
)(InvoicesForm);
