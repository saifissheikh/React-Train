import './Expenses.css';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState('2020');

    const changeFilterHandler = (year) => {
        setFilterYear(year);
    }

    const filteredExpenses = props.items.filter((expense) =>
        expense.date.getFullYear().toString() === filterYear
    )

    return (
        <div  className="expenses">
        <ExpensesFilter selected={filterYear} onChangeFilter={changeFilterHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <Card>
            <ExpensesList items={filteredExpenses} />
        </Card>
        </div>
     );
}
 
export default Expenses;