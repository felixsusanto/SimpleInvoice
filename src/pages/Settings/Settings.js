import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 0;
`;

const Settings = () => {
  return (
    <Wrapper>
      <div className="container">
        <h3>Settings</h3>
        <hr />
        <div className="row">
          <div className="col-6">
            <p className="lead">Your details</p>
            <form>
              <div className="form-group">
                <label>Contact Person / Business Name</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </form>
          </div>
          <div className="col-6">
            <p className="lead">Currency Default</p>
            <div className="form-group">
              <label>Currency</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label>Currency Symbol</label>
              <input
                type="text"
                className="form-control"
                placeholder="Password"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Settings;
