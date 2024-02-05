import { state, dispatch, userReducer } from '../reducers/index.js'
// import axios from "axios";
// console.log(axios);




export const allUsers = async cb => {
    try {
        const userDispatch = dispatch("userInitialState", userReducer);
       
        setTimeout(async () => {
            console.log('??????????????????????')
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            userDispatch({ type: "USER_ALL_SUCCESS", payload: res.data });
            cb ? cb() : null;
        }, 2000)
        
    } catch(e) {
        const userDispatch = dispatch("userInitialState", userReducer);
        userDispatch({ type: "USER_ALL_SUCCESS"});
    }
}


// 여기서 리퀘스트를 감지해서 함수와 api 요청을 보내기 
// 아니면 화면에서 해당 api 함수 실행하기 