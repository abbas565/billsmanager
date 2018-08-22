import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({
  id,
  description,
  amount,
  payMethod,
  createdAt,
  selectedFile
}) => (
  <div>
    <Link to={`./edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount / 100).format("$0,0.00")}-{payMethod}-
      {moment(createdAt).format("MMMM Do, YYYY")}
    </p>
    {console.log(selectedFile)}
    <img src={selectedFile} alt="image" height="42" width="42" />
  </div>
);

export default connect()(ExpenseListItem);
