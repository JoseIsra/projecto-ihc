
export const initialState = {
    category:1
}

const reducer =(state, action)=>{
    console.log(action)
    switch(action.type){
        case 'SELECT_CATEGORY': {
            return {
                ...state,
                category: action.payload
            }
        }
        default : return state
    }
}

export default reducer;