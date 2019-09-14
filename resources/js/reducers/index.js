import {combineReducers} from 'redux';
import HomeReducers from './home';
import StepReducers from './step';

const allReducers = combineReducers({
    home : HomeReducers, 
    step : StepReducers
});


export default allReducers;