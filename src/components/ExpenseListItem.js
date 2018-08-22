import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
      {amount}-{payMethod}-{createdAt}
    </p>
    {console.log(selectedFile)}
    <img src={selectedFile} alt="image" height="42" width="42" />
  </div>
);

export default connect()(ExpenseListItem);
