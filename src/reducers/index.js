import userReducer, { userInitialState } from './user.js'


// dispatch 
const dispatch = (stateName, reducer) => ({ type, payload }) => state[stateName] = {...state[stateName], ...reducer(null, { type, payload })}


// state
const state = {
    userInitialState:{ ...userInitialState },
}


export {
    state,
    dispatch,
    userReducer,
}
