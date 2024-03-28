import store from './redux/app/store.js'
import {increase,decrease,reset} from "./redux/features/counter/counterSlice.js"

console.log(store.getState())

store.dispatch(increase(10));
console.log(store.getState())