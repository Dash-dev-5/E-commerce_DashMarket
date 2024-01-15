import {ADD_TO_CART, DELETE_TO_CART} from '../constantes'

const initialstate = []
const reducerCart = ( state = initialstate, action ) =>{
    switch (action.type) {
        case ADD_TO_CART:
            const newErray = [...state,action.playload]
            // console.warn(newErray);
            return newErray
        case DELETE_TO_CART:
            const newErrayFilter = state.filter(arrticleCart=>arrticleCart.id!==action.playload)
            return newErrayFilter
        default:
            return state
            
    }
}
export default reducerCart