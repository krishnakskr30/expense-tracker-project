import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2019");
  const setSelectedYearHandler = (year) => {
    console.log("In expenses.js");
    console.log(selectedYear);
    setSelectedYear(year);
    console.log(year);
  };

  const filteredExpenses = props.expenseItems.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  let expensesContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ));
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onSelectingYear={setSelectedYearHandler}
      ></ExpensesFilter>
      {expensesContent}
    </Card>
  );
}

export default Expenses;
