import { userInitialState, userReducer } from './reducers/index.js';
// import axios from "../node_modules/axios/dist/esm/axios.min.js";


// dispatch 함수 만들고 액션 넣어 보내서 변경되는지 
// const { state, dispatch } = context()


// dispatch와 state를 리턴하는 함수 
const reducers = (state) => {
    let newState = {};
    const dispatch = ({ type, payload }) => {
        state = {...state, ...userReducer(null, { type, payload })}
        return state;
    };
    // const newState = {...state, ...dispatch({ type, payload })}

    return [ newState, dispatch ];
}

const [ state, dispatch ] = reducers( userInitialState );



console.log( 'dispatch?', dispatch({ type: "USER_LOGIN_SUCCESS", payload: [1,2,3] }) )
console.log('state?', state)
console.log(userInitialState)



document.querySelector('.state').innerHTML = `${state.user[0]}`









// const useDispatch = () => {
//     return obj => {
//         const { type, payload } = obj;
//         // userInitialState = {...userInitialState, ...userReducer(null, { type, payload })}
//     }
//     // const st = {...state, ...dispatch({ type: "USER_LOGIN_SUCCESS", payload: [1,2,3] })}
//     return [ st, dispatch ];
// }


// userInitialState.user = {a: 11} 
// console.log(userInitialState)
// const dispatch = useDispatch()
// console.log( dispatch({ type: "USER_LOGIN_SUCCESS", payload: [1,2,3] }) )








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


