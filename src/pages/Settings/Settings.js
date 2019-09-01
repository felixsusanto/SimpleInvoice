import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import SettingsForm from "./components/SettingsForm";
import { actionUpdateDetails } from "data/global/ducks";

const Wrapper = styled.div`
  padding: 20px 0;
`;

const Settings = props => {
  return (
    <Wrapper>
      <div className="container">
        <h3>Settings</h3>
        <hr />
        <SettingsForm
          initialValues={{
            details: props.details,
            currencyDefault: props.currencyDefault
          }}
          onSubmit={formValues => {
            props.actionUpdateDetails(formValues);
          }}
        />
      </div>
    </Wrapper>
  );
};

export default connect(
  state => ({
    details: state.global.details,
    currencyDefault: state.global.currencyDefault
  }),
  { actionUpdateDetails }
)(Settings);
