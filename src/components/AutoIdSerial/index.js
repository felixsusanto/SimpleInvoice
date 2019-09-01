import AutoIdSerial from "./AutoIdSerial";
import { connect } from "react-redux";

export const ConnectedAutoId = connect(state => ({ dataArray: state.clients }))(
  AutoIdSerial
);

export const ConnectedAutoIdInvoice = connect(state => ({ dataArray: state.invoice }))(
  AutoIdSerial
);