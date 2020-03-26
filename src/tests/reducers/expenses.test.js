import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', ()=>{
    const state = expenseReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', ()=>{
    const action ={
        type: 'REMOVE_EXPENSE',
        id : expenses[1].id
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', ()=>{
    const action ={
        type: 'REMOVE_EXPENSE',
        id : '-1'
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', ()=>{
    const expense = {
        id: '4',
        description : 'Ice Cream',
        note: '',
        amount: 500,
        createdAt: 0 
    };
    const action ={
        type: 'ADD_EXPENSE',
        expense 
        
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
});

test('should not edit expense if id not found', ()=>{
    const updates = {
        amount: 500,
    };
    const action ={
        type: 'EDIT_EXPENSE',
        id : '-1',
        updates 
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit expense by id ', ()=>{
    const updates = {
        description : 'Ice Cream',
    };
    const action ={
        type: 'EDIT_EXPENSE',
        id : expenses[2].id,
        updates 
    };
    const state = expenseReducer(expenses, action);
    expect(state[2].description).toBe('Ice Cream');
});