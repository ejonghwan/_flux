import { state, dispatch } from '../reducers/index.js'
// import axios from "axios";
// console.log(axios);

export const loginRequest = payload => {
    const { id, password } = payload;
    console.log('login : ', id, password)
}

export const allUsers = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    
        userDispatch({ type: "USER_All_SUCCESS", payload: res.data });
    } catch(e) {
        userDispatch({ type: "USER_All_SUCCESS", payload: ['jong','hehe','ggu'] });
    }
    
}



/* 
    redux flow 
    1. 화면에서 디스패쳐
    2. 리덕스에서 감지 + 리듀서에서 감지
    3. 사가에서 감지한 상태에 연결된 함수 실행  API 요청
    4. 사가에서 요청한 결과에 따른 액션 실행 (성공 or 실패)
    5. 리듀서 상태변경 후 화면에 뿌림 
*/

/* 
    flux 구현 
    문제 : 리덕스를 사용하지않으면 상태변경을 감지할 수 없음. 
    해결 :
    1. request 감지하는 함수 만들기 
    2. 화면에서 dispatch + request 함수 자체를 실행 
    뭐가 낫지 ?
*/


