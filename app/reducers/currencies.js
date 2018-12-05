import { CHANGE_CURRENCY_AMOUNT, 
        SWAP_CURRENCY, 
        swapCurrency, 
        changeCurrencyAmount } 
from '../actions/currencies';
// can use dif actio types in reducer, based off of which action type
// which reducer function should we actually run.

const initialState = {
    baseCurrency: 'USD',
    quoteCurrency: 'GBP',
    amount: 100,
    conversions: {}, 
};

// after each subsequent action it called, it will have the most recent state 
// as each action is called, they will go ahead and modify the state

// switch statement on 'action.type' because each action going out will be unique
// reducers are normally pure functions, not modifying state

// ...() before code is use of DESTRUCTURING, creates a copy of state below
// at start of switch statement, action.type grabs the particular type
// we then reach inside of the object, with action.amount
const reducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_CURRENCY_AMOUNT:
            return {
                ...state,
                amount: action.amount || 0
            }
        case SWAP_CURRENCY:
        default:
            return state;
    }
}

console.log( 'initial state', initialState)
console.log( 'swapCurrency', reducer(initialState, swapCurrency()))
console.log('change currency', reducer(initialState, changeCurrencyAmount(222)))

export default reducer;