import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({id : '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id : '123abc'
    });
});

test('should setup edit expense action', () =>{
    const action = editExpense('123abc', {note: 'New note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id : '123abc',
        updates : {note: 'New note value'}
    });
});
test('should setup add expsense options with provided values', () => {
    const expenseData ={description : 'Rent', note : 'this', amount : 15000, createdAt : 1000}
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    });
});
test('should setup add expsense options with default values', () => {
    const defaultData = {description : '', note : '', amount : 0, createdAt : 0};
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...defaultData,
            id: expect.any(String)
        }
    });
});