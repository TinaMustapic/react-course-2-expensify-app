import {setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter} from '../../actions/filters';
import moment from 'moment';
test('should generate set start date action object', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type : 'START_DATE',
        startDate : moment(0)
    });
});

test('should generate set end date action object', ()=>{
    const action = setEndDate(moment(1000));
    expect(action).toEqual({
        type : 'END_DATE',
        endDate : moment(1000)
    });
});

test('should generate sort by amount action object', ()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type : 'SORT_BY_AMOUNT'
    });
});

test('should generate sort by date action object', ()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type : 'SORT_BY_DATE'
    });
});

test('should generate set text filter with input action object', ()=>{
    const action = setTextFilter('rent');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    });
});

test('should generate set text filter with default action object', ()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});