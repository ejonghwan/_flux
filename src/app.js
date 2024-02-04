import { state, dispatch, userReducer } from './reducers/index.js';
// import axios from "../node_modules/axios/dist/esm/axios.min.js";

import { allUsers } from './request/userRequest.js'



    
const userDispatch = dispatch("userInitialState", userReducer);
userDispatch({ type: "USER_LOGIN_SUCCESS", payload: ['jong','hehe','ggu'] });

const { userInitialState } = state;

allUsers();

document.querySelector('.state').innerHTML = `${userInitialState.user.map(item => `<span>${item}</span>`).join('')}`;











// const aa = async() => {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
//     const data = res.data
//     console.log(data)
// }
// aa();

// window.addEventListener('click', e => {
//     userInitialState.isLogged = !true;
//     console.log(userInitialState)
// })



/* 
    redux flow 
    1. 화면에서 디스패쳐
    2. 리덕스에서 감지 + 리듀서에서 감지
    3. 사가에서 감지한 상태에 연결된 함수 실행  API 요청
    4. 사가에서 요청한 결과에 따른 액션 실행 (성공 or 실패)
    5. 리듀서 상태변경 후 화면에 뿌림 
*/

/* 
    문제 : 리덕스를 사용하지않으면 상태변경을 감지할 수 없음. 
    해결 :
    1. request 감지하는 함수 만들기 
    2. 화면에서 request 함수 자체를 실행 
    뭐가 낫지 ?
*/


