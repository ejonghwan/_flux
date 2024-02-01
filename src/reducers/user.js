export const userInitialState = {
    isLogged: false,
    loginLoading: false,
    user: [],
}

// { type: "" , data: [] }

const userReducer = (state = userInitialState, action) => {
    switch(action.type) {
        case "USER_LOGIN_REQUEST" : 
            return {
                ...state,
                loginLoading: true,
                isLogged: false,
            }
        case "USER_LOGIN_SUCCESS" : 
            return {
                ...state,
                loginLoading: false,
                isLogged: true,
                user: action.payload
            }
        case "USER_LOGIN_FAILUE" : 
            return {
                ...state,
                loginLoading: false,
                isLogged: false,
            }
    }
}


export default userReducer;