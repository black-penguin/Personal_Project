var initialState=
{
  img:""
}

const CHOICE="CHOICE";

export function choice(img)
{
  return{
    type:CHOICE,
    payload:img
  }
}

function reducer(state=initialState, action)
{
  state=Object.assign(state, {lastAction: action})
  console.log(action);
  switch (action.type) {
    case CHOICE:
      return Object.assign({}, state,
      {
        img:action.payload
      })
    default:
      return state;
  }
}

export default reducer;
