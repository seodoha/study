import { 
    fetchList,
    fetchUserInfo,
    fetchCommentItem,
} from '../api/index.js';

export default {
    FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then(response => {
                commit('SET_LIST', response.data);
                return response;
            })
            .catch(error => console.log(error));
    },
    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
            .then(({ data }) => {
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_ITEM({ commit }, id) {
        return fetchCommentItem(id)
            .then(response => {
                commit('SET_ITEM', response.data);
                return response;
            })
            .catch(error => {
                console.log(error);
            });
    },
}