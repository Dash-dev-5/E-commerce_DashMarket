import {FILTER_ARTICLE} from '../constantes'
import axios from 'axios'
// export const GET_STORY = 'GET_STORY'
export const actionFilterArticle = (categorise) => {
   return (dispatch) => {
                console.log('action',categorise);
                    dispatch({
                        type :FILTER_ARTICLE,
                        playload : categorise
                    })
            
   }
}