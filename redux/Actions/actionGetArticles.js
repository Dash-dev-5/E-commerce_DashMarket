import {GET_ARTICLES} from '../constantes'
import axios from 'axios'
// export const GET_STORY = 'GET_STORY'
export const getArticle = () => {
   return (dispatch) => {
        return axios.get("https://fakestoreapi.com/products/")
            .then((res) => {
                // console.log(res.data);
                    dispatch({
                        type :GET_ARTICLES,
                        playload : res.data
                    })
                })
   }
}