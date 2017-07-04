import Vue from 'vue';
import Router from 'vue-router';
import CharactersView from '@/components/views/characters-view/characters-view.vue';
import CharacterView from '@/components/views/character-view/character-view.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/characters',
      name: 'characters',
      component: CharactersView
    },
    {
      path: '/characters/:id',
      name: 'character',
      component: CharacterView,
      props: true
    },
    {
      path: '*',
      redirect: { name: 'characters' }
    },
  ]
});
