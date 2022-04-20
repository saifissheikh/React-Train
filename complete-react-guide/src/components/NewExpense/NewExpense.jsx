import { useState } from "react/cjs/react.development";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseHandler = (expenseData) => {
        const expense = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expense);
        setIsEditing(false);
    }

    const handleStopEditing = () => {
        setIsEditing(false);
    }

    const handleStartEditing = () => {
        setIsEditing(true);
    }
    return <div className="new-expense">
        {!isEditing && <div className="new-expense__actions">
            <button onClick={handleStartEditing} type="button">Add New Expense</button>
        </div>}
        {isEditing && <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={handleStopEditing} />}
    </div>;
}
 
export default NewExpense;