import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant"



export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("ADD_TO_CART condition ", action)
            return [action.data, ...data]


        case REMOVE_FROM_CART:
            console.warn("REMOVE_FROM_CART condition ", action);
            const index = data.findIndex((item) => item.name === action.data); 
            if (index >= 0) {
                return [...data.slice(0, index), ...data.slice(index + 1)]; 
            }
            return data;

        case EMPTY_CART:
            console.warn("EMPTY CART condition ", action);
            return [];
        default:
            return data
    }
}