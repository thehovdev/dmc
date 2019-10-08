import {combineReducers} from 'redux';
import HomeReducers from './home';
import StepReducers from './step';
import CompanyReducers from './company';
import ContactPersonReducers from './contactperson';

const allReducers = combineReducers({
    home : HomeReducers, 
    step : StepReducers,
    company: CompanyReducers,
    contactPerson: ContactPersonReducers
});


export default allReducers;