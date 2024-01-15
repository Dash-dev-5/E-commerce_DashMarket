import {FILTER_ARTICLE, GET_ARTICLES} from '../constantes'

const initialstate = {}
const reducerArtricle = ( state = initialstate, action ) =>{
    switch (action.type) {
        case GET_ARTICLES:
            return [...action.playload]
        case FILTER_ARTICLE:
            const errayCategorise = action.playload
            const articleFilter = []
            errayCategorise.map(element => {
                 const categor = state.filter(article=>article.category===element)
                articleFilter.concat(categor)
            });
            console.log('reducer',articleFilter)
            return [...articleFilter]
        default:
            return state
            
    }
}
export default reducerArtricle