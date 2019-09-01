import React from "react";
import { Field, reduxForm } from "redux-form";
import { ConnectedAutoId } from "components/AutoIdSerial";
import { required } from "utilities/utils";

const ClientForm = props => {
  const { isUpdating } = props;
  return (
    <form onSubmit={props.handleSubmit}>
      {isUpdating === -1 && (
        <Field name="id" component={ConnectedAutoId} prefix="client_" label="ID" />
      )}
      <div className="form-group">
        <label>Contact Person</label>
        <Field
          component="input"
          name="contactPerson"
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter contact person"
          validate={[required]}
        />
      </div>
      <div className="form-group">
        <label>Company Name</label>
        <Field
          component="input"
          name="companyName"
          type="text"
          className="form-control"
          placeholder="Enter Company Name"
          validate={[required]}
        />
      </div>
      <div className="form-group">
        <label>Country</label>
        <Field
          component="input"
          name="country"
          type="text"
          className="form-control"
          placeholder="Enter Country"
          validate={[required]}
        />
      </div>
      <div className="float-right">
        <button type="submit" className="btn btn-primary">
          {isUpdating === -1 ? "Add Client" : "Update Client"}
        </button>
      </div>
    </form>
  );
};
ClientForm.defaultProps = {
  onAddClient: () => {}
};

export default reduxForm({
  form: "ClientForm"
})(ClientForm);
