import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [renderForm, setRenderForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), //not so accurate but for this project its ok
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setRenderForm(false);
  };

  const startRenderingForm = () => {
    setRenderForm(true);
  };

  const stopRenderingForm = () => {
    setRenderForm(false);
  };

  return (
    <div className="new-expense">
      {!renderForm && (
        <button onClick={startRenderingForm}>Add New Expense</button>
      )}
      {renderForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopRenderingForm}
        ></ExpenseForm>
      )}
    </div>
  );
};
export default NewExpense;
