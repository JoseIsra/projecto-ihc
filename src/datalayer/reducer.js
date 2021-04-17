
export const getAmountOfMoney = (basket) => {
    return basket.reduce((total,units) => total+units.precio, 0);
};


export const initialState = {
    category:1,
    basket : [],
    show:false,
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
            if(state.basket.length === 0){
                return {
                    ...state,
                    basket:[...state.basket, action.payload]
                }
            }else{
                if(state.basket.findIndex((item)=>item.id === action.payload.id) !== -1){
                    return {
                        ...state,
                        basket:[...state.basket],
                    };
                }else {
                    return {
                        ...state,
                        basket:[...state.basket, action.payload]
                    }
                }
                }
            
        }
        case 'SHOW__BASKET': {
            return {
                ...state,
                show:!state.show,
            }
        }
        case 'DELETE__ITEM': {
            return {
                ...state,
                basket:state.basket.filter(item => item.id !== action.payload)
            }
        }
        default : return state
    }
}

export default reducer;