import React from "react";
import _ from "lodash";

const breakdownObjToVal = (obj, header) => {
  return header.map(key => obj[key]);
};

const ObjectTable = props => {
  const { data } = props;
  if(_.isEmpty(data)) return false;
  const header = Object.keys(data[0]);
  return (
    <table className="table">
      <thead>
        <tr>
          {header.map((str, idx) => <th key={idx}>{str}</th>)}
          {props.header.additionalCols}
        </tr>
      </thead>
      <tbody>
        {data.map((obj, idx) => {
          return (
            <tr key={idx}>
              {breakdownObjToVal(obj, header).map((val, idx) => (
                <td key={idx}>{val}</td>
              ))}
              {props.body.additionalCols}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

ObjectTable.defaultProps = {
  header: {
    additionalCols: <th>Call to Action</th>
  },
  body: {
    additionalCols: (
      <td>
        <div className="btn btn-primary btn-sm">
          <i className="fal fa-pencil" />
        </div>{" "}
        <div className="btn btn-danger btn-sm">
          <i className="fal fa-trash" />
        </div>
      </td>
    )
  },
  data: [
    ...Array(10).keys()
  ].map(idx => ({
    contactPerson: `Client Contact ${idx + 1}`,
    companyName: "Client Business Name",
    country: "Country"
  }))
};

export default ObjectTable;