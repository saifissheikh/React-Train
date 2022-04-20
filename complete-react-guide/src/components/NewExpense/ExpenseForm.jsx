import { useRef } from "react";
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    const titleInputRef = useRef();
    const amountInputRef = useRef();
    const dateInputRef = useRef();


    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: titleInputRef.current.value,
            amount: amountInputRef.current.value,
            date: dateInputRef.current.value
        }
        console.log(expenseData);
        props.onSaveExpense(expenseData);
        titleInputRef.current.value = '';
        amountInputRef.current.value = '';
        dateInputRef.current.value = '';
    }

    return (
    <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" ref={titleInputRef} />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" ref={amountInputRef} />
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" ref={dateInputRef} />
        </div>
        <div className="new-expense__actions">
            <button onClick={props.onCancel} type="button">Cancel</button>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </div>
    </form>
    )
}
export default ExpenseForm;