import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

test('should handle Edit expense', ()=>{
    const editExpense = jest.fn();
    const removeExpense = jest.fn();
    const history = {push: jest.fn()};
    const wrapper = shallow(<EditExpensePage editExpense={editExpense} expense={expenses[2]} removeExpense={removeExpense} history={history}/>);
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should render EditExpensePage correctly', ()=>{
    const editExpense = jest.fn();
    const history = {push: jest.fn()};
    const removeExpense = jest.fn();
    const wrapper = shallow(<EditExpensePage editExpense={editExpense} expense={expenses[2]} removeExpense={removeExpense} history={history}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should handle remove expense', ()=>{
    const editExpense = jest.fn();
    const removeExpense = jest.fn();
    const history = {push: jest.fn()};
    const wrapper = shallow(<EditExpensePage editExpense={editExpense} expense={expenses[2]} removeExpense={removeExpense} history={history}/>);
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[2].id});
});

