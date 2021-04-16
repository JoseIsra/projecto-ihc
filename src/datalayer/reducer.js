
export const initialState = {
    category:1,
    basket : [],
};

const reducer =(state, action)=>{
    console.log(action)
    switch(action.type){
        case 'SELECT_CATEGORY': {
            return {
                ...state,
                category: action.payload
            };
        }
        case 'ADD_ITEM': {
            return {
                ...state,
                basket: [...state.basket, action.payload],
            };
        }
        default : return state
    }
}

export default reducer;