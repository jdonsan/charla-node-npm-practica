import { mapState } from 'vuex';

export default {
    props: ['id'],
    name: 'CharacterView',
    created() {
        this.fetchCharacter();
    },
    computed: mapState({
        character: state => state.character,
        error: state => state.error
    }),
    methods: {
        fetchCharacter(id) {
            this.$store.dispatch('fetchCharacter', this.id);
        }
    }
};