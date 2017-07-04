import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const SET_CHARACTERS = 'SET_CHARACTERS';
const SET_CHARACTER = 'SET_CHARACTER';
const SET_ERROR = 'SET_ERROR';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        characters: null,
        character: null,
        error: null
    },
    mutations: {
        [SET_CHARACTERS](state, characters) {
            state.characters = characters;
        },
        [SET_CHARACTER](state, character) {
            state.character = character;
        },
        [SET_ERROR](state, error) {
            state.error = error;
        }
    },
    actions: {
        fetchCharacters(context) {
            context.commit(SET_ERROR, null);
            return axios.get('/api/adventures/characters')
                .then(res => res.data)
                .then(characters => context.commit(SET_CHARACTERS, characters))
                .catch(error => context.commit(SET_ERROR, error));
        },
        fetchCharacter(context, id) {
            context.commit(SET_ERROR, null);
            return axios.get('/api/adventures/characters/' + id)
                .then(res => res.data)
                .then(character => context.commit(SET_CHARACTER, character))
                .catch(error => context.commit(SET_ERROR, error));
        }
    }
});