import {combineReducers} from 'redux';
import HomeReducers from './home';
import StepReducers from './step';
import CompanyReducers from './company';

const allReducers = combineReducers({
    home : HomeReducers, 
    step : StepReducers,
    company: CompanyReducers
});


export default allReducers;