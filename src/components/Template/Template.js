import React from "react";
import moment from "moment";
import _ from "lodash";
import numeral from "numeral";
import styled from "styled-components";
import stub from "./stubs";


const TemplateWrapper = styled.div`
  display: block;
  .issuer {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .amount-due {
    font-size: 3rem;
    font-weight: 300;
  }
  .numeral {
    text-align: right;
  }
  .center {
    text-align: center;
  }
  .right {
    text-align: right;
  }
  .desc {
    display: block;
    max-width: 450px;
  }
  .emphasis,
  .lead {
    color: ${props => props.theme.blue};
    padding-bottom: 0.2rem;
    margin: 0.2rem 0;
    border-bottom: 1px solid #ddd;
  }
  .line-emphasis {
    border-top: 3px solid ${props => props.theme.blue};
  }
  .no-border {
    border: none;
  }
  table {
    margin-top: 20px;
    /* table-layout: fixed; */
    thead > tr > th {
      border-top: 3px solid ${props => props.theme.blue};
      color: ${props => props.theme.blue};
    }
  }
`;

const dateParser = (str) => {
  const date = new Date(str);
  return moment(date).format("DD MMM YYYY");
}
const formatter = (number) => numeral(number).format("0,0.00");
const sumLineTotal = (arrayDetails, paid, tax, discount) => {
  tax = tax || 0;
  discount = discount || 0;
  const subtotal =  arrayDetails.map(obj => obj.rate * obj.qty).reduce((a,b) => a+b, 0);
  const formatted = formatter(subtotal);
  const rawTax = ((1-discount)*subtotal) * tax;
  const rawDiscount = subtotal * discount;
  const rawAmountDue = subtotal - paid + rawTax - rawDiscount;
  return {
    details: arrayDetails.map(obj => {
      const totalDetail = obj.rate * obj.qty;
      return {
        raw: totalDetail,
        formatted: formatter(totalDetail)
      };
    }),
    subtotal: {
      raw: subtotal,
      formatted
    },
    discount: {
      raw: rawDiscount,
      formatted: formatter(rawDiscount)
    },
    tax: {
      raw: rawTax,
      formatted: formatter(rawTax)
    },
    amountDue: {
      raw: rawAmountDue,
      formatted: formatter(rawAmountDue)
    }
  };
};

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
                      Discount ({numeral(invoice.discount).format("0%")})<br />
                    </React.Fragment>
                  )}
                  {invoice.tax && (
                    <React.Fragment>
                      Tax ({numeral(invoice.tax).format("0%")})<br />
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