import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { error } from "util";

// const date = new Date();
const now = moment();
console.log(now.format("MMM Do, YYYY"));

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      payMethod: props.expense ? props.expense.payMethod : "cash",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      selectedFile: props.expense ? props.expense.selectedFile : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    };
  }
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onPayMethodChange = e => {
    const payMethod = e.target.value;
    this.setState(() => ({ payMethod }));
    console.log("payMethod:", payMethod);
  };
  fileSelectedHandler = e => {
    const selectedFile = e.target.files[0];
    this.setState(() => ({
      selectedFile: URL.createObjectURL(event.target.files[0])
    }));
    console.log("selected file", selectedFile);
  };

  onAmountChange = e => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Please provide description and amount."
      }));
    } else {
      this.setState(() => ({
        error: ""
      }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
        payMethod: this.state.payMethod,
        selectedFile: this.state.selectedFile
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <select
            value={this.state.payMethod}
            onChange={this.onPayMethodChange}
          >
            <option value="Visa-RBC-Abbas">Visa-RBC-Abbas</option>
            <option value="Checking-RBC-Abbas">Checking-RBC-Abbas</option>
            <option value="MasterCard-Costco-Abbas">
              MasterCard-Costco-Abbas
            </option>
            <option value="Visa-CIBC-Abbas">Visa-CIBC-Abbas</option>
            <option value="Visa-RBC-Mojgan">Visa-RBC-Mojgan</option>
            <option value="MasterCard-Costco-Mojgan">
              MasterCard-Costco-Mojgan
            </option>
            <option value="Cash">Cash</option>
          </select>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense (Optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <input
            type="file"
            onChange={this.fileSelectedHandler}
            accept="image/*"
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
