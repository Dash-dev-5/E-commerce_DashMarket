import axios from 'axios'
import { DELETE_TO_CART } from '../constantes'
// export const GET_STORY = 'GET_STORY'
export const actionDeletCart = (id) => {
   return (dispatch) => {
        return axios.get("https://fakestoreapi.com/products/")
            .then((res) => {
                // console.log(res.data);
                    dispatch({
                        type :DELETE_TO_CART,
                        playload : id
                    })
                })
   }
}