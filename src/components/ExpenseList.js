import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expences';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem {...expense} key={expense.id}/>
                })
            )
        }
    </div>
);
const mapStateToProps = (state) => {
    return{
        expenses : selectExpenses(state.expenses, state.filters)
    };    
} 
export default connect(mapStateToProps)(ExpenseList);
