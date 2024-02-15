import { state, dispatch, userReducer } from './reducers/index.js';
// import axios from "../node_modules/axios/dist/esm/axios.min.js";

import { allUsers } from './request/userRequest.js';


const App = () => {

    const userDispatch = dispatch("userInitialState", userReducer);
    const { userInitialState } = state;

    // request를 reducer 함수에서 감지하거나 api 함수를 직접 실행하기
    
    userDispatch({ type: "USER_ALL_REQUEST" });
    allUsers(() => {
        const { userInitialState } = state;
        userInitialState.allUserLoading ? document.querySelector('.loading').style.display = 'block' : document.querySelector('.loading').style.display = 'none'; 
        
        document.querySelector('.state').innerHTML = `${userInitialState.users.map(item => `<div>${item?.name}</div>`).join('')}`;
    });
}

export default App;






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

    * 사가에서는 리퀘스트를 감지하는 함수가 있음. 감지되면 설정된 함수가 실행됨
*/

/* 
    문제 : 리덕스를 사용하지않으면 상태변경을 감지할 수 없음. 
    해결 :
    1. request 감지하는 함수 만들기 
    2. 화면에서 request 함수 자체를 실행 
    뭐가 낫지 ?
*/


