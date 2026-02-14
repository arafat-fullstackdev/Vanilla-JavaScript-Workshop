const actions=[
    {type: 'Increment',payload: 1},
    {type: 'Increment',payload: 1},
    {type: 'Increment',payload: 1},
    {type: 'Increment',payload: 1},
    {type: 'Decrement',payload: 1},
];

const initialState ={
    value: 0,
}

const actionReducer=(state,action)=>{
    if(action.type === 'Increment'){
        return {
            ...state,
            value: state.action + action.payload,
        }
    }else if(action.type === 'Decrement'){
        return {
            ...state,
            value: state.action - action.payload,
        }
    } else{
        return state;
    }

};

const finalResult = actions.reduce(actionReducer,initialState);

console.log(finalResult)