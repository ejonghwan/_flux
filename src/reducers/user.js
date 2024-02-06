export const userInitialState = {
    isLogged: false,
    loginLoading: false,
    allUserLoading: false,
    user: [],
    users: [],
    // asd
}


const userReducer = (state = userInitialState, action) => {

    console.log('action ??', action)

    switch(action.type) {

        case "USER_ALL_REQUEST" : 
            return {
                ...state,
                allUserLoading: true,
            }
        case "USER_ALL_SUCCESS" : 
            return {
                ...state,
                allUserLoading: false,
                users: action.payload,
            }
        case "USER_ALL_FAILUE" : 
            return {
                ...state,
                allUserLoading: false,
            }


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


/*
    Object.defineProperty(person, 'firstName', {
        value: 'Ungmo',
        writable: true,  // 값 변경 가능
        enumerable: true,   // Object.keys forin으로 열거가능
        configurable: true  // 삭제 가능. 에러 발생 x
    }


    s는 여러개 가능
    Object.defineProperties(obj, {
        name: {
            value: "John",
            writable: true
        },
        age: {
            value: 30,
            writable: false
        },
        city: {
            value: "New York",
            writable: true
        }
    });
*/