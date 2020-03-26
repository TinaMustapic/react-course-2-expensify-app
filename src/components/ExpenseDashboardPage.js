import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashBoardPage = () => (
    <div>
        <ExpenseListFilters/>
        <ConnectedExpenseList/>
    </div>
);
export default ExpenseDashBoardPage;
