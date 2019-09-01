import React from "react";
import { Field, reduxForm } from "redux-form";

const SettingsForm = props => {
  return (    
    <form onSubmit={props.handleSubmit}>
      <div className="row">
        <div className="col-6">
          <p className="lead">Your details</p>
          <div className="form-group">
            <label>Contact Person / Business Name</label>
            <Field
              component="input"
              name="details.contactPerson"
              type="text"
              className="form-control"
              placeholder="Enter Contact Person / Business Name"
            />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <Field
              component="input"
              name="details.contactNumber"
              type="text"
              className="form-control"
              placeholder="Enter Contact Number"
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <Field
              component="input"
              name="details.address"
              type="text"
              className="form-control"
              placeholder="Enter Address"
            />
          </div>
          <div className="form-group">
            <label>Country</label>
            <Field
              component="input"
              name="details.country"
              type="text"
              className="form-control"
              placeholder="Enter Country"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
        <div className="col-6">
          <p className="lead">Currency Default</p>
          <div className="form-group">
            <label>Currency</label>
            <Field
              component="input"
              name="currencyDefault.currency"
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Currency"
            />
          </div>
          <div className="form-group">
            <label>Currency Symbol</label>
            <Field
              component="input"
              name="currencyDefault.currencySymbol"
              type="text"
              className="form-control"
              placeholder="Enter Currency Symbol"
            />
          </div>
        </div>
      </div>
    </form>
  );
};
SettingsForm.defaultProps = {
  onAddClient: () => {}
};

export default reduxForm({
  form: "SettingsForm"
})(SettingsForm);
