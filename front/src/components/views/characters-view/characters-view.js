import { mapState } from 'vuex';

export default {
    name: 'CharactersView',
    created() {
        this.fetchCharacters();
    },
    computed: mapState({
        characters: state => state.characters,
        error: state => state.error
    }),
    methods: {
        fetchCharacters() {
            this.$store.dispatch('fetchCharacters');
        }
    }
};