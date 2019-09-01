import React from "react";
import numeral from "numeral";

class AutoIdSerial extends React.PureComponent {
  static defaultProps = {
    dataArray: [],
    prefix: "somePrefix_",
    maskDigit: "000000",
    label: "label"
  };

  findGreatestIdAndIncrement = () => {
    const idArrays = this.props.dataArray.map(obj => obj.id);
    const numberArrays = idArrays.map(idStr => {
      return parseInt(idStr.replace(/\D+(\d+)/g, "$1"));
    });
    const getMax = numberArrays.reduce((a, v) => {
      return Math.max(a, v);
    }, 0);
    const nextId = getMax + 1;
    return this.props.prefix + numeral(nextId).format(this.props.maskDigit);
  };

  componentDidMount() {
    const {
      input: { onChange }
    } = this.props;
    onChange(this.findGreatestIdAndIncrement());
  }

  render() {
    return (
      <div className="form-group">
        <label>{this.props.label}</label>
        <input
          className="form-control"
          type="text"
          value={this.props.input.value}
          readOnly
        />
      </div>
    );
  }
}

export default AutoIdSerial;
