import styled from "styled-components";

export const TemplateWrapper = styled.div`
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
