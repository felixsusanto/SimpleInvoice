import React from "react";
import _ from "lodash";

const breakdownObjToVal = (obj, header) => {
  return header.map(key => obj[key]);
};

const ObjectTable = props => {
  const { data } = props;
  if(_.isEmpty(data)) {
    return props.emptyComponent || false;
  }
  const header = Object.keys(data[0]);
  return (
    <table className="table">
      <thead>
        <tr>
          {header.map((str, idx) => (
            <th key={idx}>{str}</th>
          ))}
          {props.additionalCols.header}
        </tr>
      </thead>
      <tbody>
        {data.map((obj, idx) => {
          return (
            <tr key={idx}>
              {breakdownObjToVal(obj, header).map((val, idx) => (
                <td key={idx}>{val}</td>
              ))}
              {props.additionalCols.body(idx)}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

ObjectTable.defaultProps = {
  
  additionalCols: {
    header: false,
    body: () => {}
  },
  data: []
  
};

export default ObjectTable;