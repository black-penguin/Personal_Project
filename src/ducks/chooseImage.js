import axios from 'axios';

var initialState=
{
  img:"",
  counter:0
}
const CHOICE="CHOICE";
const GET_CART="GET_CART"
const INCREMENT="INCREMENT";
const DECREMENT="DECREMENT";

export function choice(img)
{
  return{
    type:CHOICE,
    payload:img
  }
}

export function increment(amt)
{
  console.log(amt);
  return {
    type :INCREMENT,
    payload: amt
  }
}
export function decrement(amt)
{
  return {
    type :DECREMENT,
    payload: amt
  }
}
export function cartItems(id)
{
  const promise = axios.get(`/api/cart/${id}`)
  .then( response => response.data);
  return {
    type: GET_CART,
    payload: promise
  }
}

function reducer(state=initialState, action)
{
  state=Object.assign(state, {lastAction: action})
  switch (action.type) {
    case CHOICE:
      return Object.assign({}, state,
      {
        img:action.payload
      })
    case GET_CART + "_PENDING":
      return Object.assign({}, state,
      {
        counter:state.counter
      })
    case GET_CART + "_FULFILLED":
      return Object.assign({}, state,
      {
        counter:action.payload.length
      })
    case INCREMENT:
      console.log("reducer", action.payload);
      return Object.assign({}, state,
      {
        counter:state.counter+action.payload
      })
    case DECREMENT:
      return Object.assign({}, state,
        {
          counter:state.counter-action.payload
      })
    default:
      return state;
  }
}

export default reducer;
