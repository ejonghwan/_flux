import userReducer, { userInitialState } from './user.js'


// dispatch 
// const dispatch = (stateName, reducer) => ({ type, payload }) => state[stateName] = {...state[stateName], ...reducer(null, { type, payload })}

const dispatch = (stateName, reducer) => ({ type, payload }) => {
    
    // request dispatch 감지하는 기능
    return state[stateName] = {...state[stateName], ...reducer(null, { type, payload })}
   
}


// state
const state = {
    userInitialState:{ ...userInitialState },
}


export {
    state,
    dispatch,
    userReducer,
}
