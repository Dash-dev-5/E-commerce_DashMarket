import {ADD_TO_CART} from '../constantes'
import axios from 'axios'
// export const GET_STORY = 'GET_STORY'
export const  AddToCartAction = (data) => {
   return (dispatch) => {
        return axios.get("https://fakestoreapi.com/products/")
            .then((res) => {
                console.log(data);
                    dispatch({
                        type :ADD_TO_CART,
                        playload : data
                    })
                })
   }
}