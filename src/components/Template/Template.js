import React from "react";
import _ from "lodash";
import stub from "./stubs";
import { TemplateWrapper } from "./styles";
import { dateParser, formatter, sumLineTotal, percentFormatter } from "./utils";

const Template = props => {
  const { data, defaultCurrency, defaultCurrencySymbol } = props;
  if(_.isEmpty(data)) return false;
  const {
    client,
    dates,
    invoice,
    issuer
  } = data;
  const { billedCurrency, billedCurrencySymbol } = client;
  const currency = billedCurrency || defaultCurrency;
  const currencySymbol = billedCurrencySymbol || defaultCurrencySymbol;
  const calculation = sumLineTotal(invoice.details, invoice.amountPaid, invoice.tax, invoice.discount);
  return (
    <TemplateWrapper>
      {props.children}
      <div className="row justify-content-end issuer">
        <div className="col-12 col-lg-3">
          {issuer.contactPerson} <br />
          {issuer.contactNumber}
        </div>
        <div className="col-12 col-lg-3">
          {issuer.address} <br />
          {issuer.country}
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-lg-3">
          <div className="lead">Billed to</div>
          {client.contactPerson} <br />
          {client.companyName} <br />
          {client.country}
        </div>
        <div className="col-6 col-lg-3">
          <div className="lead">Date of Issue</div>
          {dateParser(dates.issued)}
          <div className="lead">Due Date</div>
          {dateParser(dates.due)}
        </div>
        <div className="col-6 col-lg-3">
          <div className="lead">Invoice Number</div>
          {invoice.id}
        </div>
        <div className="col-6 col-lg-3 right">
          <div className="lead">Amount Due ({currency})</div>
          <div className="amount-due">
            {currencySymbol}
            {calculation.amountDue.formatted}
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th className="numeral">Rate</th>
              <th className="center">Qty</th>
              <th className="numeral">Line Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice.details.map((obj, index) => {
              return (
                <tr key={index}>
                  <td>
                    <strong>{obj.title}</strong> <br />
                    <small
                      className="desc"
                      dangerouslySetInnerHTML={{ __html: obj.description }}
                    />
                  </td>
                  <td className="numeral">
                    {currencySymbol}
                    {formatter(obj.rate)}
                  </td>
                  <td className="center">{obj.qty}</td>
                  <td className="numeral">
                    {currencySymbol}
                    {calculation.details[index].formatted}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="row justify-content-end">
        <div className="col-6">
          <table className="table">
            <tbody>
              <tr>
                <th className="right">
                  Sub Total <br />
                  {invoice.discount && (
                    <React.Fragment>
                      Discount ({percentFormatter(invoice.discount)})<br />
                    </React.Fragment>
                  )}
                  {invoice.tax && (
                    <React.Fragment>
                      Tax ({percentFormatter(invoice.tax)})<br />
                    </React.Fragment>
                  )}
                  Amount Paid
                </th>
                <td className="right">
                  {calculation.subtotal.formatted}
                  <br />
                  {invoice.discount && (
                    <React.Fragment>
                      -{calculation.discount.formatted}
                      <br />
                    </React.Fragment>
                  )}
                  {invoice.tax && (
                    <React.Fragment>
                      {calculation.tax.formatted}
                      <br />
                    </React.Fragment>
                  )}
                  {!!invoice.amountPaid && "-"}{formatter(invoice.amountPaid)}
                </td>
              </tr>
              <tr className="line-emphasis">
                <th className="right emphasis no-border">
                  Amount Due ({currency})
                </th>
                <td className="right">
                  {currencySymbol}
                  {calculation.amountDue.formatted}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </TemplateWrapper>
  );
};

Template.defaultProps = {
  defaultCurrency: "SGD",
  defaultCurrencySymbol: "$",
  data: stub
};

export default Template;