<template>
    <div>
        <div v-if="error">
            <p>Algo funcionó mal, inténtalo de nuevo</p>
            <button @click="fetchCharacters">Recargar</button>
        </div>
        <div v-else>
            <ul>
                <router-link class="character" v-for="character in characters" :key="character.id" :to="{ name: 'character', params: { id: character.id }}">
                    <img :src="character.image" :alt="character.name" />
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script src="./characters-view.js"></script>
<style lang="scss" src="./characters-view.scss" scoped></style>